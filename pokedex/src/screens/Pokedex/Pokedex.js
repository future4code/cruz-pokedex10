import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { goToHome } from '../../routes/coordinator'
import GlobalStateContext from '../../global/GlobalStateContext'

import Header from '../../components/Header/Header'
import { Container, ContainerButton, PokedexDiv} from './styled'
import { Button } from '../../constants/buttons'
import PokemonCard from '../../components/PokemonCard/PokemonCard'

const Pokedex = () => {
    const history = useHistory()
    const {pokedex} = useContext(GlobalStateContext)

    return(
        <Container>
            <Header/>
            <ContainerButton>
                <Button onClick = {() => goToHome(history)}>Voltar Para Home</Button>
            </ContainerButton>
            <PokedexDiv>
                {pokedex && pokedex.map((poke) => {
                    return <PokemonCard isPokedex key={poke.name} poke={poke} />
                })}
            </PokedexDiv>
            
        </Container>
    )
}

export default Pokedex