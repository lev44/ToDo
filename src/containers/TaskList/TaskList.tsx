import React, { useState } from "react";
import { Task, AddTask } from "./Task";

const fromStorage: string | null = localStorage.getItem("todo");
const startTasks: Task[] = fromStorage ? JSON.parse(fromStorage) : [];

const clearStorage = () => localStorage.setItem("todo", "");

const saveTaskList = (tasks: Task[]) => {
  localStorage.setItem("todo", JSON.stringify(tasks));
};

const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>(startTasks);
  const newTask: NewTask = (name: string) =>
      setTasks([...tasks, { name, time: Date.now(), done: false }]);

  const deleteTask = (selectedTask: Task) => {
    const newTasks: Task[] = tasks.filter(
        (task: Task) => task !== selectedTask
    );
    setTasks(newTasks);
  };

  const toggleTask = (selectedTask: Task) => {
    const newTasks: Task[] = tasks.map((task: Task) => {
      if (task === selectedTask) {
        return { ...task, done: !task.done };
      }
      return task;
    });
    setTasks(newTasks);
  };

  saveTaskList(tasks);

  return (
      <>
        <AddTask newTask={newTask} />
    <ul>
      {tasks.map((task) => (
        <Task
          key={task.time.toString()}
          todo={task}
          deleteTask={deleteTask}
          toggleTask={toggleTask}
        />
      ))}
    </ul>
        <button onClick={() => clearStorage()}>Clear storage</button>
      </>
  );
};

export { TaskList };
