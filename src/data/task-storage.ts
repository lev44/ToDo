import {Task} from "../containers/TaskList/Task";

export const taskStorage = {
    get: () => JSON.parse(localStorage.getItem("todo") || "[]"),
    clear: () => {localStorage.setItem("todo", "")},
    add: (task: Task) => {
        const newStorage = [ ...taskStorage.get(), task ];
        localStorage.setItem("todo", JSON.stringify(newStorage));
    },
    delete: (selectedTask: Task) => {
        const newStorage = taskStorage.get().filter(
            (task: Task) => task.time !== selectedTask.time
        );
        localStorage.setItem("todo", JSON.stringify(newStorage));
    },
    toggle: (selectedTask: Task) => {
        const newStorage = taskStorage.get().map((task: Task) => {
            if (task.time === selectedTask.time) {
                return { ...task, done: !task.done };
            }
            return task;
        });
        localStorage.setItem("todo", JSON.stringify(newStorage));
    },
    save: (tasks: Task[]) => {
        localStorage.setItem("todo", JSON.stringify(tasks));
    },
}