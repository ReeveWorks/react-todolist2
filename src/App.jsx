import './styles/global.css'
import './styles/app.css'
import Header from './components/header.jsx'
import Footer from './components/footer.jsx'
import { useState } from 'react'
import { Provider } from 'react-redux'
import { store } from './state/store.jsx'
import { TasksProvider } from './contexts/tasksContext.jsx'
import { usePageStore } from './store/pageStore.jsx';

import TodoList from './components/todolist.jsx'
import TodoListContext from './components/todo-context.jsx'
import TodoListZustand from './components/todo-zustand.jsx'
import TodoListRedux from './components/todo-redux.jsx'

function App() {
  const page = usePageStore((state) => state.page);
  
  return (
    <div className="ctr-app">
      <div className='ctr-header'><Header /></div>

      {/* UseContext Hook management system */}
      <TasksProvider >
        <div className={page.selected === "Context" ? 'ctr-todolist' : 'off'}><TodoListContext /></div>
      </TasksProvider>

      {/* Zustand management system */}
      <div className={page.selected === "Zustand" ? 'ctr-todolist' : 'off'}><TodoListZustand /></div>

      {/* redux management system */}
      <Provider store={store}>
        <div className={page.selected === "Redux" ? 'ctr-todolist' : 'off'}><TodoListRedux /></div>
      </Provider>

      <div className='ctr-footer'><Footer /></div>
    </div>
  )
}

export default App
