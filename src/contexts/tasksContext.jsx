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
    todo.push({ id: todo[todo.length - 1].id + 1, task, status: false });
  }
  function toggleTodo(task) {
    setTodo(todo.map((todo) => 
      todo.id === task ? { ...todo, status: !todo.status } : todo
    ));
  }

  function moveUp(task) {
    if (task === 1) return; // Can't move up the first item

    setTodo(todo.map((todo) => 
      todo.id === task ? { ...todo, id: task-1 } : todo.id === task-1 ? { ...todo, id: task } : todo
    ));
  }

  function moveDown(task) {
    if (task === todo.length) return; // Can't move down the last item

    setTodo(todo.map((todo) => 
      todo.id === task ? { ...todo, id: task+1 } : todo.id === task+1 ? { ...todo, id: task } : todo
    ));
  }

  return (
    <TasksContext.Provider value={{ todo, addTodo, setTodo, toggleTodo, moveUp, moveDown }}>
      {children}
    </TasksContext.Provider>
  );
};