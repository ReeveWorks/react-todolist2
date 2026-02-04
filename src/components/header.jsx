import '../styles/global.css'
import '../styles/header.css'

function header() {

  return (
    <>
      <header className="header">
        <h1>My To-Do List</h1>
        <li>
          <a>UseContext</a>
          <a>Zustand</a>
          <a className='selected'>Redux</a>
        </li>
      </header>
    </>
  )
}

export default header