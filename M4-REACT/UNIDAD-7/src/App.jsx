import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './views/Home'
import Personajes from './views/Personajes'
import Navbar from './components/Navbar'
import { Navigate, Route, Routes } from 'react-router-dom'
import Personaje from './views/Personaje'
import Login from './views/Login'
import Administracion from './views/Administracion'
import { UserContext } from './context/UserContext'

function App() {
  const [count, setCount] = useState(0)
  const {user} = useContext(UserContext)


  return (
    <>
    <Navbar/>
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/personajes' element={<Personajes />} />
    <Route path= "/personajes/:id" element={<Personaje />} />
    <Route path='/login' element={user? <Navigate to="/"/> : <Login/>}/>
    <Route path='/admin' element={user? <Administracion/> : <Navigate to="/login"/> }/>
  </Routes>
    </>
  )
}

export default App
