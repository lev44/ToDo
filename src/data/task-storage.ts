export const taskStorage = {
    get: (task: Task) => JSON.parse(localStorage.getItem(task.time.toString()) || ""),
    getAll: () => {
        const tasks = [];
        for (let  i = 0; i < localStorage.length; i++) {
            let key = localStorage.key(i);
            if (key) {
                tasks.push(JSON.parse(localStorage.getItem(key) || ""));
            }
        }
        return tasks.sort((a, b) => a.time - b.time);
    },
    add: (task: Task) => {
        localStorage.setItem(task.time.toString(), JSON.stringify(task));
    },
    update: (selectedTask: Task) => {
        const updatedTask = { ...selectedTask, done: !selectedTask.done };
        localStorage.setItem(selectedTask.time.toString(), JSON.stringify(updatedTask));
    },

    delete: (selectedTask: Task) => {
        localStorage.removeItem(selectedTask.time.toString());
    },
    deleteAll: () => {localStorage.clear()},
}