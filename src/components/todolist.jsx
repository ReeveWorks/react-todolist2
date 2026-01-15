import '../styles/todolist.css'
import { useState, useContext } from 'react';
// import { TasksContext } from '../contexts/tasksContext.jsx';
import { useTodosStore } from '../store/todoItems.jsx';

function todolist() {
  const [item, setItem] = useState("");
  const [weight, setWeight] = useState(0);

  /* Zustand Store Option 1*/
  const tasks = useTodosStore((state) => state.tasks);
  const setTasks = useTodosStore((state) => state.setTasks);

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

    setTasks([...tasks,
    {
      id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
      task: item,
      weight: Number(weight), 
      status: false
    }]);
    setItem("");
    setWeight(0);
  }

  function deleteTask(index) {
    const newTasks = tasks.filter(t => t.id !== index);
    setTasks(newTasks);
  }

  function toggleStatus(index) {
    setTasks(tasks.map(t => t.id === index ? {...t, status: !t.status} : t));
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

                  <button onClick={() => toggleStatus(task.id)}>✓</button>
                  <button onClick={() => deleteTask(task.id)}>✕</button>
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

                  <button onClick={() => toggleStatus(task.id)}>↺</button>
                  <button onClick={() => deleteTask(task.id)}>✕</button>
                </li>
              ))
          }
        </ol>
      </div>
    </>
  )
}

export default todolist