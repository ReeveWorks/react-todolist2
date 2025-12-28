import { useEffect, useRef, useContext } from "react";
import { TasksContext } from '../contexts/tasksContext.jsx';

function footer() {
  const count = useRef(0);
  const todo = useContext(TasksContext);

  useEffect(() => {
    count.current = count.current + 1;
    console.log('Render Count:', count.current); 
  }, [todo]);''

  return (
    <>
      <footer className="footer">
        <p>Render Count: {count.current}</p>
      </footer>
    </>
  )
}

export default footer