import React, { useContext, useState } from 'react'
import Aumentar from './Aumentar'
import CountContext from '../context/CountContext'
import { GlobalContext } from '../context/GlobalContext'

export default function Cuenta() {
   const {count, setCount} = useContext(GlobalContext)

  return (
    <div>
    <h2>La cuenta es {count}</h2>
      <div className="card">
        <Aumentar setCount={setCount}></Aumentar>
      </div>
    </div>
  )
}
