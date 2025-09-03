import React from 'react'
import { useState } from 'react'

export default function MyInput() {
    const [nombre, setNombre] = useState("")
    const [color, setColor] = useState("")

    const handleChange = (e)=>{
        console.log("Usando la funcion handleChange")
        setColor(e.target.value) 
        document.querySelector("body").style.backgroundColor = e.target.value       
    }

  return (
    <div>
        <input type="text" onChange={(e)=> handleChange(e)}/>
        <input type="text" onChange={(e)=> {setNombre(e.target.value)}} />
        <input type="color" name="" id="" onChange={(e) => handleChange(e)} />
        <p>Color elegido: {color}</p>
        <p>{nombre}</p>
    </div>
  )
}
