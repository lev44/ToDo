import React, { useState } from 'react';

export const AddTask: React.FC<NewTaskProps> = ({ newTask }) => {
  const [name, setName] = useState<string>('');
  return (
    <form>
      <button
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          if (name) {
            newTask(name);
            setName('');
          }
        }}
      >
        Add new task
      </button>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </form>
  );
};
