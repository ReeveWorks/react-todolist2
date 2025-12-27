import '../styles/todolist.css'
import { useState, useContext } from 'react';
import { TasksContext } from '../contexts/tasksContext.jsx';

function todolist() {
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

            <button>
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