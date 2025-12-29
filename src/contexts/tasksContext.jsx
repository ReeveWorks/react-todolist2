import { createContext, useState } from 'react';

export const TasksContext = createContext({
    todo: ['Item 1', 'Item 2', 'Item 3']
});

export const TasksProvider = ({ children }) => {
  const [todo, setTodo] = useState(['Item 1', 'Item 2', 'Item 3', 'Item 4']);

  return (
    <TasksContext.Provider value={{ todo, setTodo }}>
      {children}
    </TasksContext.Provider>
  );
};