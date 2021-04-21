import React, { useContext } from 'react'
import GlobalStateContext from '../../global/GlobalStateContext'
import { useHistory } from 'react-router-dom'

import Header from '../../components/Header/Header'
import PokemonCard from '../../components/PokemonCard/PokemonCard'

import { goToPokeDetail, goToPokedex } from '../../routes/coordinator'
import { Button } from '../../constants/buttons'

const Home = () => {
    const history = useHistory()
    const {pokemons} = useContext(GlobalStateContext)

    return(
        <div>
            <Header/>
            <h1>Home</h1>
            <Button onClick={ () => goToPokeDetail(history) }>Detalhes</Button>
            <Button onClick={ () => goToPokedex(history) }>Pokedex</Button>
            <div>
                {pokemons && pokemons.map((poke) => {
                    return <PokemonCard poke={poke}key={poke.name}/>
                })}
            </div>
            
        </div>
    )
}

export default Home