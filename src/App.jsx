import { useState } from 'react'
import './styles/app.css'
import Header from './components/header.jsx'
import TodoList from './components/todolist.jsx'
import Footer from './components/footer.jsx'
import { TasksProvider } from './components/TaskContext.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="ctr-app">
      <TasksProvider.Provider>
        <div className='ctr-header'><Header/></div>
        <div className='ctr-todolist'><TodoList/></div>
        <div className='ctr-footer'><Footer/></div>
      </TasksProvider.Provider>
    </div>
  )
}

export default App
