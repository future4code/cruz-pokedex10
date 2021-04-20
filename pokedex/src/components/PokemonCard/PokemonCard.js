import React from 'react'
import { 
    PokeContainer, 
    ImgContainer, 
    PokeImage, 
    ButtonsContainer} from './styled'
import { useHistory } from 'react-router-dom'
import { goToPokedex } from '../../routes/coordinator'
import { goToPokeDetail } from '../../routes/coordinator'

const PokemonCard = () => {
    const history = useHistory()

    return (
    <PokeContainer>

        <ImgContainer>
            <PokeImage />
        </ImgContainer>

        <ButtonsContainer>
            <button onClick={() => goToPokedex(history) }> Adicionar </button>
            <button onClick={() => goToPokeDetail(history)}> Ver detalhes </button>
        </ButtonsContainer>

    </PokeContainer>
    )
}

export default PokemonCard