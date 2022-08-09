import React, { useCallback } from "react";
import { Task } from '@domain/models/Task';
import { taskService } from '@domain/services/TaskService';
import { taskRepositoryFake } from '@infrastructure/instances/taskRepositoryFake';

interface TaskListProps {
    onSelectTask: (task: Task) => void;
}

export const TaskList: React.FC<TaskListProps> = ({ onSelectTask }) => {
    const [tasks, setTasks] = React.useState<Task[]>([]);

    const getTasks = useCallback(async () => {
        try {
            const responseTasks = await taskService(taskRepositoryFake).getTasks();
            setTasks(responseTasks);
        } catch (exception) {
            console.error(exception);
        }
    }, []);

    React.useEffect(() => {
        getTasks();
    }, [])

    const handleSelectTask = (task: Task) => {
        onSelectTask(task);
    }


    return (
        <div>
            <h2>Lis of task</h2>
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>
                        <p>{task.title}</p>
                        <div>
                            <p>{task.description}</p>
                        </div>
                        <button
                            onClick={() => {
                                handleSelectTask(task);
                            }}
                        >
                            Seleccionar task
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}