import '../styles/global.css'
import '../styles/header.css'
import { usePageStore } from '../store/pageStore.jsx';
import { useModeStore } from '../store/modeStore.jsx';

function header() {
  const page = usePageStore((state) => state.page);
  const selectPage = usePageStore((state) => state.selectPage);

  const mode = useModeStore((state) => state.mode);
  const setMode = useModeStore((state) => state.setMode);

  function toggleMode() {
    setMode(!mode.state);
  }
  return (
    <>
      <header className="header">

        <li>
          <h1>My To-Do List</h1>
          <img src={mode.img} alt="toggle" className="toggle" onClick={() => toggleMode()} />
        </li>

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