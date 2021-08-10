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
  get: (task: Task) => Task;
  getAll: () => Task[],
  add: (task: Task) => void,
  delete: (task: Task) => void,
  update: (task: Task) => void,
  deleteAll: () => void,
}

interface TaskListProps {
  storage: TaskStorage
}
