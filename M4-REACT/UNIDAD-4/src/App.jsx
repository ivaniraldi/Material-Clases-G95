import { useState, useEffect} from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Dropdown from './components/Dropdown'

function App() {
  const [count, setCount] = useState(0)
  const [nombre, setNombre] = useState("")
  const [frase, setFrase] = useState("")
  const apiURL = "https://api.gameofthronesquotes.xyz/v1/random"

  async function getData(){
    const res = await fetch(apiURL)
    const formattedData = await res.json()
    return `${formattedData.sentence} - ${formattedData.character.name}`  
  }


  useEffect(()=>{
    console.log("Ejecutando useEffect") 
    document.title = `La cuenta es: ${count}` 
    
  }, [count])
  
  useEffect(()=>{
    setFrase(getData())
  }, [])


  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>React - Unidad 4</h1>
      <div className="card">
        <p>{frase}</p>
        <button onClick={() => setCount((count) => count + 1)}>
          La cuenta es {count}
        </button>
        <br />
      </div>
        <br />
        <label htmlFor="Nombre">Ingrese su nombre:</label>
        <br />
        <input type="text" value={nombre} onChange={(e)=> setNombre(e.target.value)} />
        <Dropdown></Dropdown>
    </>
  )
}

export default App
