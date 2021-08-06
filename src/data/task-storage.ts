import {Task} from "../containers/TaskList/Task";
/*
const fromStorage: string | null = localStorage.getItem("todo");
const startTasks: Task[] = fromStorage ? JSON.parse(fromStorage) : [];

const clearStorage = () => localStorage.setItem("todo", "");

const saveTaskList = (tasks: Task[]) => {
    localStorage.setItem("todo", JSON.stringify(tasks));
};
*/
export const taskStorage = {
    get: () => JSON.parse(localStorage.getItem("todo") || "[]"),
    clear: () => {localStorage.setItem("todo", "")},
    add: (tasks: Task[]) => {localStorage.setItem("todo", JSON.stringify(tasks))},
}