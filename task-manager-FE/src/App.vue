<script setup lang="ts">
import { ref, onMounted } from "vue";
import { toast } from "vue3-toastify";
import {
  fetchTasks,
  createTask,
  markTaskCompleted,
  markTaskUncompleted,
  Task,
} from "./api/taskService";

const tasks = ref<Task[]>([]);
const title = ref("");
const description = ref("");
const loading = ref(false);
const errorMessage = ref("");

const loadTasks = async () => {
  try {
    tasks.value = await fetchTasks();
  } catch (error) {
    errorMessage.value = "Failed to load tasks.";
    toast.error(errorMessage.value);
  }
};

const addTask = async () => {
  if (!title.value || !description.value) return;
  loading.value = true;
  try {
    const newTask = await createTask(title.value, description.value);
    tasks.value.push(newTask);
    toast.success("Task added successfully!");
    title.value = "";
    description.value = "";
  } catch (error) {
    errorMessage.value = "Error creating task.";
    toast.error(errorMessage.value);
  } finally {
    loading.value = false;
  }
};

const completeTask = async (taskId: string) => {
  try {
    const updatedTask = await markTaskCompleted(taskId);
    const index = tasks.value.findIndex((task) => task.id === taskId);
    if (index !== -1) tasks.value[index] = updatedTask;
    toast.success("Task marked as completed!");
  } catch (error) {
    errorMessage.value = "Error marking task as completed.";
    toast.error(errorMessage.value);
  }
};

const uncompleteTask = async (taskId: string) => {
  try {
    const updatedTask = await markTaskUncompleted(taskId);
    const index = tasks.value.findIndex((task) => task.id === taskId);
    if (index !== -1) tasks.value[index] = updatedTask;
    toast.info("Task marked as incompleted.");
  } catch (error) {
    errorMessage.value = "Error marking task as uncompleted.";
    toast.error(errorMessage.value);
  }
};

onMounted(loadTasks);
</script>

<template>
  <div class="app-container max-w-3xl mx-auto p-4">
    <h1 class="text-3xl font-bold text-center mb-6">Task Manager</h1>

    <div v-if="errorMessage" class="text-red-600 text-center mb-4">
      {{ errorMessage }}
    </div>

    <div class="bg-white p-6 rounded shadow mb-8">
      <h2 class="text-xl font-semibold mb-4">Add a New Task</h2>
      <form @submit.prevent="addTask" class="space-y-4">
        <div>
          <label class="block font-medium">Title</label>
          <input type="text" v-model="title" class="w-full p-2 border rounded" required />
        </div>
        <div>
          <label class="block font-medium">Description</label>
          <textarea v-model="description" class="w-full p-2 border rounded" required></textarea>
        </div>
        <button type="submit" class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 disabled:opacity-50"
          :disabled="loading">
          <span v-if="loading"
            class="animate-spin mr-2 border-2 border-white border-t-transparent rounded-full w-4 h-4 inline-block align-middle"></span>
          {{ loading ? "Adding..." : "Add Task" }}
        </button>
      </form>
    </div>

    <div>
      <h2 class="text-xl font-semibold mb-4">Tasks</h2>
      <div v-if="tasks.length === 0" class="text-center text-gray-500">No tasks available.</div>
      <ul class="space-y-4">
        <li v-for="task in tasks" :key="task.id" class="flex justify-between items-start bg-white p-4 rounded shadow">
          <div>
            <h3 :class="{ 'line-through text-gray-500': task.isCompleted }" class="font-semibold text-lg">
              {{ task.title }}
            </h3>
            <p class="text-gray-600">{{ task.description }}</p>
          </div>
          <div>
            <button v-if="!task.isCompleted" @click="completeTask(task.id)"
              class="bg-green-500 text-white px-4 py-1 rounded hover:bg-green-600">
              Complete
            </button>
            <button v-else @click="uncompleteTask(task.id)"
              class="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600">
              Incompleted
            </button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
