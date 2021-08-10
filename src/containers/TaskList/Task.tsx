import React from 'react';

export const Task: React.FC<TaskProps> = ({ todo, deleteTask, toggleTask }) => (
  <li>
    <button type="button" onClick={() => deleteTask(todo)}>Delete</button>
    {' '}
    <input
      type="checkbox"
      checked={todo.done}
      onClick={() => {
        toggleTask(todo);
      }}
    />
    {' '}
    <span style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>
      {todo.name}
    </span>
  </li>
);
