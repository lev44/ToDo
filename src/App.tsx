import React from "react";
import { TaskList } from "./containers";
import { taskStorage} from "./data/task-storage";

function App() {
  return (
      <TaskList storage={taskStorage}/>
  );
}

export default App;