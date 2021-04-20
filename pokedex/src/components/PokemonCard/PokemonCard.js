import React from 'react'
import { 
    PokeContainer, 
    ImgContainer, 
    PokeImage, 
    ButtonsContainer} from './styled'
import { useHistory } from 'react-router-dom'
import { goToPokedex } from '../../routes/coordinator'
import { goToPokeDetail } from '../../routes/coordinator'

import { Button } from '../../constants/buttons'

const PokemonCard = () => {
    const history = useHistory()

    return (
    <PokeContainer>

        <ImgContainer>
            <PokeImage />
        </ImgContainer>

        <ButtonsContainer>
            <Button onClick={() => goToPokedex(history) }> Adicionar </Button>
            <Button onClick={() => goToPokeDetail(history)}> Ver detalhes </Button>
        </ButtonsContainer>

    </PokeContainer>
    )
}

export default PokemonCard