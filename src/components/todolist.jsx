import '../styles/todolist.css'
import { useState, useContext } from 'react';
import { TasksContext } from '../contexts/tasksContext.jsx';
import { useTodosStore } from '../store/todoItems.jsx';

function todolist() {
  const [item, setItem] = useState("");
  const {todo, setTodo} = useContext(TasksContext);
  
  /* Zustand Store Option 1*/
  const tasks = useTodosStore((state) => state.tasks);
  const setTasks = useTodosStore((state) => state.setTasks);
  
  /* Zustand Store Option 2*/
  // const {tasks, setTasks} = useTodosStore((state) => ({
  // tasks: state.tasks,
  // setTasks: state.setTasks,
  // }));

  /* Zustand Store Option 3*/
  // const {tasks, setTasks} = useTodosStore();

  function InputChange(event) {
    setItem(event.target.value);
  }

  function addTask() {
    if (item.trim() === "") return;

    setTasks([...tasks, item]);
    setItem("");
  }

  function deleteTask(index) {
    const newTodo = todo.filter((_, i) => i !== index);
    setTodo(newTodo);
  }

  return (
    <>
      <div className="todolist">
        <input
          type="text"
          value={item}
          onChange={InputChange}
          placeholder="Add new task..." />
        <button onClick={() => addTask()}>
          Add
        </button>

        <ol>
          {tasks.map((task, index) => (
          <li key={index}>
            <span>{task}</span>

            <button onClick={() => deleteTask(index)}>
              🗑️
            </button>
            <button>
              △
            </button>
            <button>
              ▽
            </button>
          </li>
          ))}
        </ol>
      </div>
    </>
  )
}

export default todolist