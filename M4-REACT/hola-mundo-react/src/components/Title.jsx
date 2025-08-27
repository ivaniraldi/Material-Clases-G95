import Button from "./Button"

const Title = (props) =>{

      console.log("Esto esta siendo logeado desde el componente Title")
      let nombre = "Ivan"
      let num1 = 2
      let num2 = 3
    return (
        <div>
            <h1 className="color-rojo">Introducción a React: Componente Title.jsx esta clase fue dictada por {nombre}</h1>
            <h2>{props.texto} - {num1+num2}</h2>
        </div>
    )
}

export default Title