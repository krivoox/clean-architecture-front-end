import { Task } from "../models/Task";

export interface TaskRepository {
    getTasks: () => Promise<Task[]>;
    getTasksById: (id: string) => Promise<Task[]>
}