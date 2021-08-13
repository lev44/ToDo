export const taskStorage = {
  get: (task: Task) => JSON.parse(localStorage.getItem(task.createdAt.toString()) || ''),
  getAll: () => {
    const tasks = [];
    for (let i = 0; i < localStorage.length; i += 1) {
      const key = localStorage.key(i);
      if (key) {
        tasks.push(JSON.parse(localStorage.getItem(key) || ''));
      }
    }
    return tasks.sort((a, b) => a.createdAt - b.createdAt);
  },
  add: (task: Task) => {
    localStorage.setItem(task.createdAt.toString(), JSON.stringify(task));
  },
  update: (selectedTask: Task) => {
    const updatedTask = { ...selectedTask, done: !selectedTask.done };
    localStorage.setItem(selectedTask.createdAt.toString(), JSON.stringify(updatedTask));
  },

  delete: (selectedTask: Task) => {
    localStorage.removeItem(selectedTask.createdAt.toString());
  },
  deleteAll: () => { localStorage.clear(); },
};

export default taskStorage;
