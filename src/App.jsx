import { useState } from 'react'
import Header from './components/header.jsx'
import TodoList from './components/todolist.jsx'
import Footer from './components/footer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <TodoList/>
      <Footer/>
    </>
  )
}

export default App
