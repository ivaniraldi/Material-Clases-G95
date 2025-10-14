import { createContext, useEffect, useState } from "react";

export const CharacterContext = createContext()

export const CharacterProvider = ({children}) => {
    const [characters, setCharacters] = useState([])
    const [character, setCharacter] = useState(null)
    
    const getCharacters = async () => {
        const response = await fetch(`https://rickandmortyapi.com/api/character/`)
        const data = await response.json()
        setCharacters(data.results)
    }

    const getCharacter = async (id) => {
        try {
            const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
        const data = await response.json()

        } catch (error) {
            setCharacter(null)
        }
    }

    useEffect(() => {
        getCharacters()
    }, [])

    return (
        <CharacterContext.Provider value={{character, setCharacter, characters, setCharacters, getCharacter}}>
            {children}
        </CharacterContext.Provider>
    )
}

export default CharacterProvider