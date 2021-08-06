import React, { useState } from "react";
import { Task, AddTask } from "./Task";

type Props = { storage: TaskStorage };

const TaskList: React.FC<Props> = (props) => {
  const [tasks, setTasks] = useState<Task[]>(props.storage.get());
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

  props.storage.add(tasks);

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
        <button onClick={() => props.storage.clear()}>Clear storage</button>
      </>
  );
};

export { TaskList };
