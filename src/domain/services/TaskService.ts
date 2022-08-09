import { TaskRepository } from "../repositories/TaskRepository";



export const taskService = (repository: TaskRepository): TaskRepository => ({
    getTasks: () => {
        return repository.getTasks();
    },
    getTasksById: id => {
        return repository.getTasksById(id);
    }
})