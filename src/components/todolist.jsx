import '../styles/todolist.css'
import { useState, useContext } from 'react';
import { TasksContext } from './TaskContext';

function todolist() {
  const [tasks, setTasks] = useState(['Item 1', 'Item 2', 'Item 3']);
  const [item, setItem] = useState("");
  const todoHolder = useContext(TasksContext);
  console.log(todoHolder.todo);

  function InputChange(event) {
    setItem(event.target.value);
  }

  function addTask() {
    if (item.trim() === "") return;

    setTasks([...tasks, item]);
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
          {tasks.map((task, index) => (
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