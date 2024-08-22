import { useState } from 'react'
import './App.css'
import List from './components/List'
import Input from './components/Input'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Input value={count} onChange={setCount} onSubmit={console.log} />
      <List items={['Learn React', 'Learn Vite', 'Make an awesome app']} />
    </>
  )
}

export default App
