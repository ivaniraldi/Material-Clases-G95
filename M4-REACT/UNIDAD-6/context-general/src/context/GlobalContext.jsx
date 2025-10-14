import { createContext, useState } from "react";

export const GlobalContext = createContext()

const GlobalProvider  = ({ children }) => {
    const [nombre, setNombre] = useState("Ivan")
    const [edad, setEdad] = useState(27)
    const [count, setCount] = useState(0)
    const aumentarEdad = ()=>{
        setEdad(edad + 1)
    }

    const apellido = "Iraldi"

    return(
        <GlobalContext.Provider value={{nombre, setNombre, edad, setEdad, aumentarEdad, apellido, count, setCount}}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalProvider