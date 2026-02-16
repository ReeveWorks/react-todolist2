import { toggletask, deletetask, addtask } from '../state/todolist/todoSlice';
import '../styles/global.css'
import '../styles/todolist.css'
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

function todolist() {
  const [item, setItem] = useState("");
  const [weight, setWeight] = useState(0);

  function InputChange(event) {
    setItem(event.target.value);
  }
  function WeightChange(event) {
    if (event.target.value < 0) return;
    if (event.target.value > 10) return;
    if (event.target.value.includes('.')) return;

    setWeight(event.target.value);
  }

  const tasks = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  function toggleStatus(index) {
    dispatch(toggletask(index));
  }

  function deleteTask(index) {
    dispatch(deletetask(index));
  }

  function addTask() {
    if (item.trim() === "") return;
    if (weight == 0) return;
    dispatch(addtask({
      task: item,
      weight: Number(weight)
    }));

    setItem("");
    setWeight(0);
  }

  return (
    <>
      <div className="todolist">
        <>
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

          <button 
            className='btn-Add' 
            onClick={() => addTask()}
            >Add</button>
        </>


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
                  
                  <b>{task.id}&nbsp;</b>
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