import React from 'react';

export const Task: React.FC<TaskProps> = ({ todo, deleteTask, toggleTask }) => {
  const handleClickButton = () => {
    deleteTask(todo);
  };
  const handleClickCheckbox = () => {
    toggleTask(todo);
  };
  return (
    <li>
      <button type="button" onClick={handleClickButton}>Delete</button>
      {' '}
      <input
        type="checkbox"
        checked={todo.done}
        onClick={handleClickCheckbox}
      />
      {' '}
      <span style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>
        {todo.name}
      </span>
    </li>
  );
};
