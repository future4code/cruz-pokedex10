import React, { useEffect, useState } from 'react'
import { BASE_URL} from '../constants/api'
import axios from 'axios'
import GlobalStateContext from './GlobalStateContext'

const GlobaState = (props) => {
    const [pokemonNames, setPokemonNames] = useState([])
    const [pokemons, setPokemons] = useState([])
    const [pokedex, setPokedex] = useState([])

    useEffect(() => {
        getPokemonNames()
    }, [])
    
    useEffect(() => {
        const newList = []
        pokemonNames.forEach((item) => {
            axios
                .get(`${BASE_URL}/${item.name}`)
                .then((response) => {
                    newList.push(response.data)
                    if (newList.length === 20) {
                        const orderedList = newList.sort((a, b) => {
                            return a.id - b.id
                        }); setPokemons(orderedList)
                    } 
                })
                .catch((error) => console.log(error))
        })
    }, [pokemonNames])
    
    const getPokemonNames = () => {
        axios
            .get(`${BASE_URL}?limit=20`)
            .then((response) => {
                setPokemonNames(response.data.results)
            })
            .catch((error) => console.log(error))
    }

    const data = { pokemons, setPokemons, pokedex, setPokedex }

    return (

        <GlobalStateContext.Provider value={data}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobaState