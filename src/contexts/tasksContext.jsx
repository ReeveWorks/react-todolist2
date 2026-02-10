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
    todo.push({ id: Math.max(...todo.map(o => o.id)) + 1, task, status: false });
  }

  function deleteTask(task) {
    setTodo(todo.filter(t => t.id != task));
  }
  
  function toggleTodo(task) {
    setTodo(todo.map((todo) => 
      todo.id === task ? { ...todo, status: !todo.status } : todo
    ));
  }

  function moveUp(task) {
    const selectedTask = todo.filter(i => i.id < task.id && i.status === task.status);

    if (selectedTask.length === 0) return;
    const NewID = Math.max(...selectedTask.map(o => o.id));

    setTodo(todo.map((todo) => 
      todo.id === task.id ? { ...todo, id: NewID } : todo.id === NewID ? { ...todo, id: task.id } : todo
    ));
  }

  function moveDown(task) {
    const selectedTask = todo.filter(i => i.id > task.id && i.status === task.status);

    if (selectedTask.length === 0) return;
    const NewID = Math.min(...selectedTask.map(o => o.id));

    setTodo(todo.map((todo) => 
      todo.id === task.id ? { ...todo, id: NewID } : todo.id === NewID ? { ...todo, id: task.id } : todo
    ));
  }

  return (
    <TasksContext.Provider value={{ todo, addTodo, setTodo, toggleTodo, moveUp, moveDown, deleteTask }}>
      {children}
    </TasksContext.Provider>
  );
};