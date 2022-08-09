
export interface ITask {
    createTask: () => Task;
    updateTask: (id: string) => Task;
    deleteTask: (id: string) => void;
}

export type Task = {
    id: string;
    title: string;
    description: string;
}