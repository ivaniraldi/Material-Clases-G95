import React, { useContext } from 'react'
import CountContext from '../context/CountContext'

export default function Aumentar({setCount}) {
  return (
    <button onClick={() => setCount((count) => count + 1)}>Aumentar</button>
  )
}
