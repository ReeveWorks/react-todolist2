import '../styles/global.css'
import '../styles/todolist.css'
import { useState } from 'react';
import { useTodosStore } from '../store/todoItems.jsx';

function TodoListZustand() {
  const [item, setItem] = useState("");
  const [weight, setWeight] = useState(0);

  /* Zustand Store Option 1*/
  const tasks = useTodosStore((state) => state.tasks);
  const setTasks = useTodosStore((state) => state.setTasks);
  const addTodo = useTodosStore((state) => state.addTodo);
  const deleteTodo = useTodosStore((state) => state.deleteTask);
  const toggleTodo = useTodosStore((state) => state.toggleStatus);

  function InputChange(event) {
    setItem(event.target.value);
  }

  function WeightChange(event) {
    if (event.target.value < 0) return;
    if (event.target.value > 10) return;
    if (event.target.value.includes('.')) return;

    setWeight(event.target.value);
  }

  function addTask() {
    if (item.trim() === "") return;
    if (weight == 0) return;

    addTodo({ task: item, weight: Number(weight) });

    setItem("");
    setWeight(0);
  }

  return (
    <>
      <div className="todolist">
        <input
          type="text"
          value={item}
          onChange={InputChange}
          placeholder="Add new task..." />
        <input
          type="number"
          value={weight}
          onChange={WeightChange}
          placeholder="set weight"
          step='1'
          min='0'
          max='100' />

        <button className='btn-Add' onClick={() => addTask()}>
          Add
        </button>

        <ol className='lst-task'>
          {
            tasks
              .filter(i => !i.status)
              .sort((a, b) => b.weight - a.weight)
              .map((task) => (
                <li key={task.id}>
                  <b>{task.weight}&nbsp;</b>
                  <span>{task.task}</span>
                  
                  <b>{task.id}&nbsp;</b>
                  <button onClick={() => toggleTodo(task.id)}>✓</button>
                  <button onClick={() => deleteTodo(task.id)}>✕</button>
                </li>
              ))
          }
        </ol>
        <ol className='lst-completed'>
          {
            tasks
              .filter(i => i.status)
              .sort((a, b) => b.weight - a.weight)
              .map((task) => (
                <li key={task.id}>
                  <b>{task.weight}&nbsp;</b>
                  <span>{task.task}</span>
                  
                  <b>{task.id}&nbsp;</b>
                  <button onClick={() => toggleTodo(task.id)}>↺</button>
                  <button onClick={() => deleteTodo(task.id)}>✕</button>
                </li>
              ))
          }
        </ol>
      </div>
    </>
  )
}

export default TodoListZustand