import '../styles/global.css'
import '../styles/todolist.css'
import { useState, useContext } from 'react';
import { TasksContext } from '../contexts/tasksContext.jsx';

function TodoListContext() {
  const [item, setItem] = useState("");
  const { todo, setTodo, addTodo, toggleTodo } = useContext(TasksContext);

  function InputChange(event) {
    setItem(event.target.value);
  }

  function addTask() {
    if (item.trim() === "") return;

    addTodo(item);
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
        <button className='btn-Add' onClick={() => addTask()}>
          Add
        </button>

        <ol className="lst-task">
          {
            todo
              .filter(i => !i.status)
              .sort((a, b) => a.id - b.id)
              .map((todo) => (
                <li key={todo.id}>
                  <b>{todo.id}&nbsp;</b>
                  <span>{todo.task}</span>


                  <button onClick={() => toggleTodo(todo.id)}>✓</button>
                  <button onClick={() => deleteTask(todo.id)}>✕</button>
                  <button>△</button>
                  <button>▽</button>
                </li>
              ))
          }
        </ol>        
        <ol className='lst-completed'>
          {
            todo
              .filter(i => i.status)
              .sort((a, b) => a.id - b.id)
              .map((todo) => (
                <li key={todo.id}>
                  <b>{todo.id}&nbsp;</b>
                  <span>{todo.task}</span>


                  <button onClick={() => toggleTodo(todo.id)}>↺</button>
                  <button onClick={() => deleteTask(todo.id)}>✕</button>
                  <button>△</button>
                  <button>▽</button>
                </li>
              ))
          }
        </ol>
      </div>
    </>
  )
}

export default TodoListContext