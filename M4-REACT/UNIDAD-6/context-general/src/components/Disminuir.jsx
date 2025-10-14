import React, { useContext } from 'react'
import CountContext from '../context/CountContext'
import { GlobalContext } from '../context/GlobalContext'

export default function Disminuir() {
    const { setCount } = useContext(CountContext)

    const { nombre, apellido } = useContext(GlobalContext) 
  return (
    <div>
        <p>Mi nombre es: {nombre} {apellido}</p>
        <button onClick={()=> setCount((count) => count - 1)}>Disminuir  </button>
    </div>
  )
}
