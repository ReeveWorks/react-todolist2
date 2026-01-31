import '../styles/global.css'
import '../styles/todolist.css'
import { useState } from 'react';
import {useSelector}  from 'react-redux';

function todolist() {
    const tasks = useSelector((state) => state.todos.todos);
  

  return (
    <>
      <div className="todolist">
        <ol className='lst-task'>
          {
            tasks
              .filter(i => !i.status)
              .sort((a, b) => b.weight - a.weight)
              .map((task) => (
                <li key={task.id}>
                  <b>{task.weight}&nbsp;</b>
                  <span>{task.task}</span>

                  <button>✓</button>
                  <button>✕</button>
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

                  <button>✓</button>
                  <button>✕</button>
                </li>
              ))
          }
        </ol>
      </div>
    </>
  )
}

export default todolist