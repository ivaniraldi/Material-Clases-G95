import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './views/Home'
import Login from './views/Login'
import { useState } from 'react'
import Register from './views/Register'
import NotFound from './views/NotFound'

function App() {
  const [token, setToken] = useState(false)

  return (
    <>
      <Routes>
        <Route path='/' element={token == true? <Home/> : <Login/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      <button onClick={() => setToken(!token)}>Token= {token? "true":"false"}</button>
    </>
  )
}

export default App
