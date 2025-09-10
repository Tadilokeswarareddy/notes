import React from 'react'
import Login from './pages/Login.jsx'
import { Route,Routes,BrowserRouter } from 'react-router-dom'
import './App.css'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/login' element={<Login/>}/>
    </Routes>
    </BrowserRouter>

    </>
  )
}

export default App