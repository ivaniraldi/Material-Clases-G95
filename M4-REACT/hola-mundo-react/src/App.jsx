import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Title from './components/Title'
import Button from './components/Button'

function App() {
  console.log("Esto esta siendo logeado desde el componente App")

  return (
    <>
      <Title texto="Titulo 1"/>
      <Button texto="Inicio de la clase" numero="1"></Button>
      <Button texto="Fin de la clase" numero="2"/>
    </>
  )
}

export default App
