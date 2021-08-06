import React, {useState} from "react";

const Task: React.FC<TaskProps> = ({ todo, deleteTask, toggleTask }) => {
    return (
        <li>
            <button onClick={ () => deleteTask(todo) } >Delete</button>{' '}
            <input type="checkbox" checked={todo.done} onClick={ () => { toggleTask(todo)} } />{' '}
            {todo.name}
        </li>
    );
};

const AddTask: React.FC<NewTaskProps> = ({ newTask }) => {
    const [name, setName] = useState<string>('');
    return (
        <form>
            <button type="submit" onClick={e => {
                e.preventDefault();
                if (name) {
                    newTask(name);
                    setName('');
                }
            }} >Add new task</button>
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
        </form>
    );
};

export { Task, AddTask }