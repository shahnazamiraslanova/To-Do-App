
import { useState } from 'react'
import './App.css'
import Form from './components/Form'
import List from './components/List'
import { TodoContext } from './context/todoContex'
import { Toaster } from 'react-hot-toast';

function App() {



  const [list, setList] = useState([])

  const value = {
    list,
    setList
  }

  return (
    <TodoContext.Provider value={value}>
      <div id='main'>
        <div id='todoMain'>
          
          <Toaster />
          <Form />
          <List />
        </div>
      </div>
    </TodoContext.Provider>
  )
}

export default App
