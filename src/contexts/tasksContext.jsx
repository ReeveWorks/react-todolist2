import { createContext, useState } from 'react';

export const TasksContext = createContext({
  todo: []
});

export const TasksProvider = ({ children }) => {
  const [todo, setTodo] = useState([
    {id: 1, task: "Task 1", status: false},
    {id: 2, task: "Task 2", status: false},
    {id: 3, task: "Task 3", status: false},
    {id: 4, task: "Task 4", status: true},
  ]);

  function addTodo(task) {
    setTodo([...todo, { id: todo[todo.length - 1].id + 1, task, status: false }]);
  }

  return (
    <TasksContext.Provider value={{ todo, addTodo, setTodo }}>
      {children}
    </TasksContext.Provider>
  );
};