import React from 'react'
import { BrowserRouter} from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'; 
import Tasks from './components/Tasks'
import UpdateTask from './components/UpdateTask'
import CreateTask from './components/CreateTask';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Tasks />}></Route>
      <Route path='/create' element={<CreateTask />}></Route>
      <Route path='/update/:id' element={<UpdateTask />}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App