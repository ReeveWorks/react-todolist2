import '../styles/global.css'
import '../styles/header.css'
import { usePageStore } from '../store/pageStore.jsx';

function header() {
  const page = usePageStore((state) => state.page);
  const selectPage = usePageStore((state) => state.selectPage);

  return (
    <>
      <header className="header">
        <h1>My To-Do List</h1>
        <li>
          <a onClick={() => selectPage("Context")} 
          className={page.selected === "Context" ? 'selected' : ''}>UseContext</a>
          
          <a onClick={() => selectPage("Zustand")} 
          className={page.selected === "Zustand" ? 'selected' : ''}>Zustand</a>
          
          <a onClick={() => selectPage("Redux")} 
          className={page.selected === "Redux" ? 'selected' : ''}>Redux</a>
        </li>
      </header>
    </>
  )
}

export default header