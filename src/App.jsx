import './styles/global.css'
import './styles/app.css'
import Header from './components/header.jsx'
import TodoList from './components/todolist.jsx'
import Footer from './components/footer.jsx'
import { TasksProvider } from './contexts/tasksContext.jsx'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="ctr-app">
      <TasksProvider>
        <div className='ctr-header'><Header/></div>
        <div className='ctr-todolist'><TodoList/></div>
        <div className='ctr-footer'><Footer/></div>
      </TasksProvider>
    </div>
  )
}

export default App
