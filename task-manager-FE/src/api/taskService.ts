import axios from "axios";

const API_URL = "http://localhost:3000/tasks";

export interface Task {
  id: string;
  title: string;
  description: string;
  isCompleted: boolean;
}

export const fetchTasks = async (): Promise<Task[]> => {
  try {
    const response = await axios.get<Task[]>(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching tasks:", error);
    throw error;
  }
};


export const createTask = async (title: string, description: string): Promise<Task> => {
  try {
    const response = await axios.post<Task>(API_URL, { title, description });
    return response.data;
  } catch (error) {
    console.error("Error creating task:", error);
    throw error;
  }
};


export const markTaskCompleted = async (id: string): Promise<Task> => {
  try {
    const response = await axios.patch<Task>(`${API_URL}/${id}/complete`);
    return response.data;
  } catch (error) {
    console.error("Error marking task as completed:", error);
    throw error;
  }
};

export const markTaskUncompleted = async (id: string): Promise<Task> => {
    try {
      const response = await axios.patch<Task>(`${API_URL}/${id}/uncomplete`);
      return response.data;
    } catch (error) {
      console.error("Error marking task as uncompleted:", error);
      throw error;
    }
  };
  
