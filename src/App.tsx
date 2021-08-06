import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Task, AddTask } from "./Task";
import { TaskList, ClearStorage } from "./TaskList";

function App() {
  const fromStorage: string | null = localStorage.getItem("todo");
  const startTasks: Task[] = fromStorage ? JSON.parse(fromStorage) : [];

  const [tasks, setTasks] = useState<Task[]>(startTasks);
  const clearStorage = () => localStorage.setItem("todo", "");
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

  return (
    <>
      <p>Task List</p>
      <AddTask newTask={newTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} toggleTask={toggleTask} />
      <ClearStorage clearStorage={clearStorage} />

      <div hidden className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>ToDo</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </>
  );
}

export default App;
