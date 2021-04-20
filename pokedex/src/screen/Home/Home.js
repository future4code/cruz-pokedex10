import React from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

import Header from '../../components/Header/Header'
import PokemonCard from '../../components/PokemonCard/PokemonCard'

import { goToPokeDetail, goToPokedex } from '../../routes/coordinator'

const Home = () => {
    const history = useHistory()

    return(
        <div>
            <Header/>
            <h1>Home</h1>
            <button onClick={ () => goToPokeDetail(history) }>Detalhes</button>
            <button onClick={ () => goToPokedex(history) }>Pokedex</button>
            <PokemonCard/>
        </div>
    )
}

export default Home