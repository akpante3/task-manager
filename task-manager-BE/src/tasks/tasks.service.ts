import { Injectable } from '@nestjs/common';
import { Task } from './task.model';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  createTask(title: string, description: string): Task {
    const newTask: Task = {
      id: uuidv4(),
      title,
      description,
      isCompleted: false,
    };
    this.tasks.push(newTask);
    return newTask;
  }

  getAllTasks(): Task[] {
    return this.tasks;
  }

  markTaskAsCompleted(id: string): Task {
    const task = this.tasks.find((task) => task.id === id);
    if (!task) {
      throw new Error('Task not found');
    }
    task.isCompleted = true;
    return task;
  }

  markTaskAsUncompleted(id: string): Task {
    const task = this.tasks.find((task) => task.id === id);
    if (!task) {
      throw new Error('Task not found');
    }
    task.isCompleted = false;
    return task;
  }
}
