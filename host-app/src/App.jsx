import { useState } from 'react'
import List from 'todo_components/List'
import Input from 'todo_components/Input'
import Header from 'todo_components/Header'

function App() {
  const [newTodo, setNewTodo] = useState('')
  const [todos, setTodos] = useState([])
  const onSubmit = () => {
    setTodos((prev) => [...prev, newTodo])
    setNewTodo('')
  }

  return (
    <>
      <Header />
      <Input value={newTodo} onChange={setNewTodo} onSubmit={onSubmit} />
      <List items={todos} />
    </>
  )
}

export default App
