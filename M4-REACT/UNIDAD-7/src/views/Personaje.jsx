import { useContext, useEffect } from "react"
import { useParams } from "react-router-dom"
import { CharacterContext } from "../context/CharacterContext"

export default function Personaje() {

    const {id} = useParams()
    const { character, getCharacter } = useContext(CharacterContext)

    useEffect(()=>{
        getCharacter(id)
    }, [id])


    console.log(character)

    return (
        <div>
            <h1>Personaje id n° = {id}</h1>
            {
                character ?  <p> {character.name} </p> : <p>No se encontró un personaje con ese ID :(</p>
            }
        </div>
    )
}