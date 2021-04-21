import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { goToHome } from '../../routes/coordinator'
import GlobalStateContext from '../../global/GlobalStateContext'

import Header from '../../components/Header/Header'
import { Button } from '../../constants/buttons'
import PokemonCard from '../../components/PokemonCard/PokemonCard'

const Pokedex = () => {
    const history = useHistory()
    const {pokedex} = useContext(GlobalStateContext)

    return(
        <div>
            <Header/>
            <h1>Pokedex</h1>
            <Button onClick = {() => goToHome(history)}>Voltar Para Home</Button>
            <div>
                {pokedex && pokedex.map((poke) => {
                    return <PokemonCard isPokedex key={poke.name} poke={poke} />
                })}
            </div>
            
        </div>
    )
}

export default Pokedex