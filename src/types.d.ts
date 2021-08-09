interface Task {
  name: string;
  time: number;
  done: boolean;
}

type NewTask = (name: string) => void;

interface NewTaskProps {
  newTask: NewTask;
}

type DeleteTask = (selectedTask: Task) => void;
type ToggleTask = (selectedTask: Task) => void;

interface TaskProps {
  todo: Task;
  deleteTask: DeleteTask;
  toggleTask: ToggleTask;
}

interface TaskStorage {
  get: () => Task[],
  add: (task: Task) => void,
  delete: (task: Task) => void,
  toggle: (task: Task) => void,
  clear: () => void,
  save: (tasks: Task[]) => void,
}

interface TaskListProps {
  storage: TaskStorage
}


/*
declare global {
  export type TaskStorage = {
    get: () => Task[],
    add: (task: Object) => void,
    clear: () => void,
  };
}
*/



/*
interface TaskListProps {
  tasks: Task[];
  deleteTask: DeleteTask;
  toggleTask: ToggleTask;
}

interface ClearStorageProps {
  clearStorage: ClearStorage;
*/
