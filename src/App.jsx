import './styles/global.css'
import './styles/app.css'
import Header from './components/header.jsx'
import TodoList from './components/todolist.jsx'
import Footer from './components/footer.jsx'
import { TasksProvider } from './contexts/tasksContext.jsx'
import { useState } from 'react'
import {Provider} from 'react-redux'
import {store} from './state/store.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="ctr-app">
      <div className='ctr-header'><Header/></div>

      {/* <TasksProvider.Provider>
        <div className='ctr-todolist'><TodoList/></div>
      </TasksProvider.Provider> */}

      {/* redux management system */}
      <Provider store={store}>
        <div className='ctr-todolist'><TodoList/></div>
      </Provider>
      
      <div className='ctr-footer'><Footer/></div>
    </div>
  )
}

export default App
