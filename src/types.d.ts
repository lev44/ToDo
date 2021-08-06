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
// type ClearStorage = () => void;

interface TaskProps {
  todo: Task;
  deleteTask: DeleteTask;
  toggleTask: ToggleTask;
}

type TaskStorage = {
  get: () => Task[],
  add: (tasks: Task[]) => void,
  clear: () => void,
};

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
