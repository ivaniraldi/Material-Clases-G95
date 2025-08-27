import React from 'react'

export default function Button(props) {
      console.log("Esto esta siendo logeado desde el componente Button")
      console.log(props)
  return (
    <button>Botón número: {props.numero} - {props.texto}</button>
  )
}
