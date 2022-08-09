import { TaskDTO } from "../infrastructure/http/dto/TaskDTO";


export const taskListMock: TaskDTO[] = [
    {
        id: '1',
        title: 'Tarea 1',
        description: 'Tarea 1 descricion',
        createdDate: new Date()
    },
    {
        id: '2',
        title: 'Tarea 2',
        description: 'Tarea 2 descricion',
        createdDate: new Date()
    },
    {
        id: '3',
        title: 'Tarea 2',
        description: 'Tarea 2 descricion',
        createdDate: new Date()
    },
]