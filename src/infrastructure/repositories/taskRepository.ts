import { Task } from "../../domain/models/Task";
import { Http } from "../../domain/repositories/Http";
import { TaskRepository } from "../../domain/repositories/TaskRepository";
import { TaskDTO } from "../../infrastructure/http/dto/TaskDTO";


export const taskRepository = (client: Http): TaskRepository => ({
    getTasks: async () => {
        const tasks = await client.get<TaskDTO>('');
        return tasks.map((taskDto): Task => ({ id: taskDto.id, title: taskDto.title, description: taskDto.description }))
    },
    getTasksById: async id => {
        const task = await client.get<TaskDTO>('', { id });
        return task.map((taskDto): Task => ({ id: taskDto.id, title: taskDto.title, description: taskDto.description }))
    }
})