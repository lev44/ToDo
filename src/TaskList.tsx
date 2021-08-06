import React from "react";
import { Task } from './Task';

const saveTaskList = (tasks: Task[]) => {
    localStorage.setItem('todo', JSON.stringify(tasks));
}

const TaskList: React.FC<TaskListProps> = ({ tasks, deleteTask, toggleTask }) => {
    saveTaskList(tasks);
    return (
        <ul>
            {tasks.map(task => (
                <Task key={task.time.toString()} todo={task} deleteTask={deleteTask} toggleTask={toggleTask} />
            ))}
        </ul>
    )
}

const ClearStorage: React.FC<ClearStorageProps> = ({ clearStorage }) => {
    return (
        <button onClick={ () => clearStorage() } >Clear storage</button>
    );
};

export { TaskList, ClearStorage }