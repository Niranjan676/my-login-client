import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import Dashboard from './components/Dashboard'
import Users from './components/Users'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='/register' element={<Register />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/users' element={<Users />} />
      </Routes>
    </div>
  )
}

export default App
