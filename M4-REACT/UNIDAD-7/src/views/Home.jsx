import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { CharacterContext } from "../context/CharacterContext"

export default function Home() {
    const [id, setId] = useState("")
    const navigate = useNavigate()
    const { characters } = useContext(CharacterContext)
    console.log(characters)
const irAlPersonaje = () =>{
    console.log(id)
    navigate(`/personajes/${id}`)
}


    return (
        <div>
            <h1>Home</h1>
            <div>
                <input type="text" value={id} onChange={(e) => setId(e.target.value)} /> <button onClick={irAlPersonaje}>Buscar</button>

                {/*characters.map((character) => (
                    <div key={character.id}>
                        <h2>{character.name}</h2>
                        <img src={character.image} alt={character.name} />
                        <button onClick={() => navigate(`/personajes/${character.id}`)}>Ver</button>
                    </div>
                ))*/}
            </div>
        </div>
    )
}