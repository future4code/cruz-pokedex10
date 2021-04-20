import React from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

import Header from '../../components/Header/Header'
import PokemonCard from '../../components/PokemonCard/PokemonCard'

import { goToPokeDetail, goToPokedex } from '../../routes/coordinator'
import { Button } from '../../constants/buttons'

const Home = () => {
    const history = useHistory()

    return(
        <div>
            <Header/>
            <h1>Home</h1>
            <Button onClick={ () => goToPokeDetail(history) }>Detalhes</Button>
            <Button onClick={ () => goToPokedex(history) }>Pokedex</Button>
            <PokemonCard/>
        </div>
    )
}

export default Home