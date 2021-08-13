import React, { ChangeEvent, useState } from 'react';

export const AddTask: React.FC<NewTaskProps> = ({ newTask }) => {
  const [name, setName] = useState<string>('');
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => setName(e.target.value);
  const handleClick = (e: any) => {
    e.preventDefault();
    if (name) {
      newTask(name);
      setName('');
    }
  };
  return (
    <form>
      <button
        type="submit"
        onClick={handleClick}
      >
        Add new task
      </button>
      <input
        type="text"
        value={name}
        onChange={handleChange}
      />
    </form>
  );
};
