import React from 'react'
import Todolist from './components/todolist.jsx'

const App = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 min-h-screen grid">
      <Todolist />
    </div>
  )
}

export default App