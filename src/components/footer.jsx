import '../styles/global.css'
import { useEffect, useRef, useContext } from "react";
import { TasksContext } from '../contexts/tasksContext.jsx';
import { useTodosStore } from '../store/todoItems.jsx';

function footer() {
  const count = useRef(0);
  const todo = useContext(TasksContext);
  const {tasks} = useTodosStore();

  useEffect(() => {
    count.current = count.current + 1;
    console.log('Render Count:', count.current); 
  }, [tasks]);

  return (
    <>
      <footer className="footer">
        <p>Render Count: {count.current}</p>
      </footer>
    </>
  )
}

export default footer