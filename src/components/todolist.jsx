import '../styles/todolist.css'
import { useState, useContext } from 'react';
import { TasksContext } from '../contexts/tasksContext.jsx';
import { useTodosStore } from '../store/todoItems.jsx';

function todolist() {
  const [item, setItem] = useState("");
  const [weight, setWeight] = useState(0);
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
  
  function WeightChange(event) {
    if (event.target.value < 0) return;
    if (event.target.value > 100) return;
    if (event.target.value.includes('.')) return;

    setWeight(event.target.value);
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
        {/* Add new task */}
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
          max='100'/>


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

export default todolist