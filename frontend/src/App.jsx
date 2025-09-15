import React from 'react'
import './App.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/register'
import Home from './pages/Home'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/home' element={<Home/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App