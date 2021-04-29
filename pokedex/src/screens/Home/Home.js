import React, { useContext } from 'react'
import GlobalStateContext from '../../global/GlobalStateContext'
import { useHistory } from 'react-router-dom'

import Header from '../../components/Header/Header'
import PokemonCard from '../../components/PokemonCard/PokemonCard'

import { Container, ContainerButton,Div } from './styled'
import { goToPokedex } from '../../routes/coordinator'
import { Button } from '../../constants/buttons'

const Home = () => {
    const history = useHistory()
    const {pokemons} = useContext(GlobalStateContext)

    return(
        <Container>
            <Header/>
            <ContainerButton>
                <Button onClick={ () => goToPokedex(history) }> Sua Pokédex</Button>
            </ContainerButton>
            <Div>
                {pokemons && pokemons.map((poke) => {
                    return <PokemonCard poke={poke} key={poke.name}/>
                })}
            </Div>
            
        </Container>
    )
}

export default Home