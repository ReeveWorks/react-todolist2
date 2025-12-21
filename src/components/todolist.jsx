import '../styles/todolist.css'
import { useState } from 'react';

function todolist() {

  const [lists, setList] = useState("Item 0");
  const [item, setItem] = useState("");

  function InputChange(event) {
    setItem(event.target.value);
  }

  function addItem() {
    if(item.trim() === "") return;

    setList(item);
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
        <button onClick={() => addItem()}>
          Add
        </button>
        <p>{lists}</p>
        <p>Item 1</p>
        <p>Item 2</p>
        <p>Item 3</p>
        <p>Item 4</p>
      </div>
    </>
  )
}

export default todolist