import '../styles/global.css'
import '../styles/todolist.css'
import { useState, useContext } from 'react';
import { TasksContext } from '../contexts/tasksContext.jsx';

function todolistContext() {
  const [item, setItem] = useState("");
  const {todo, setTodo} = useContext(TasksContext);

  function InputChange(event) {
    setItem(event.target.value);
  }

  function addTask() {
    if (item.trim() === "") return;

    setTodo([...todo, item]);
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
          {todo.map((task, index) => (
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

export default todolistContext