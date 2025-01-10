import './App.css'
import Login from './components/auth/login'
import Registration from "./components/auth/registration"

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Todo from './components/todo/todo'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/register' element={<Registration />} />
          <Route path='/todo' element={<Todo />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
