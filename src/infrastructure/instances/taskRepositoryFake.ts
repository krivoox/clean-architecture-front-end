import { TaskRepository } from "../../domain/repositories/TaskRepository";
import { Http } from "../../domain/repositories/Http";
import { httpFake } from "../../infrastructure/instances/httpFake";
import { taskRepository } from "../../infrastructure/repositories/taskRepository";

const client: Http = httpFake;

export const taskRepositoryFake: TaskRepository = taskRepository(client);