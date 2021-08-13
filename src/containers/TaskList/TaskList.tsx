import React, { useState } from 'react';
import { Task } from './Task';
import { AddTask } from './AddTask';

const TaskList: React.FC<TaskListProps> = ({ storage }) => {
  const [tasks, setTasks] = useState<Task[]>(storage.getAll());

  const newTask: NewTask = (name: string) => {
    const newTodo = { name, createdAt: Date.now(), done: false };
    setTasks([...tasks, newTodo]);
    storage.add(newTodo);
  };

  const deleteTask = (selectedTask: Task) => {
    const newTasks: Task[] = tasks.filter(
      (task: Task) => task !== selectedTask,
    );
    storage.delete(selectedTask);
    setTasks(newTasks);
  };

  const toggleTask = (selectedTask: Task) => {
    const newTasks: Task[] = tasks.map((task: Task) => {
      if (task === selectedTask) {
        return { ...task, done: !task.done };
      }
      return task;
    });
    storage.update(selectedTask);
    setTasks(newTasks);
  };

  const clearStorage = () => {
    storage.deleteAll();
    setTasks([]);
  };

  const handleClick = () => {
    clearStorage();
  };

  return (
    <>
      <AddTask newTask={newTask} />
      <ul>
        {tasks.map((task) => (
          <Task
            key={task.createdAt.toString()}
            todo={task}
            deleteTask={deleteTask}
            toggleTask={toggleTask}
          />
        ))}
      </ul>
      <button type="button" onClick={handleClick}>Delete all tasks</button>
    </>
  );
};

export { TaskList };
