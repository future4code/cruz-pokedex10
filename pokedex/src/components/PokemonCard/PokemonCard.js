import React, { useContext } from 'react'
import { 
    PokeContainer, 
    ImgContainer, 
    PokeImage, 
    ButtonsContainer} from './styled'
import GlobalStateContext from '../../global/GlobalStateContext'
import { useHistory } from 'react-router-dom'
import { goToPokedex } from '../../routes/coordinator'
import { goToPokeDetail } from '../../routes/coordinator'

import { Button } from '../../constants/buttons'

const PokemonCard = (props) => {
    const history = useHistory()
    const {pokemons, setPokemons, pokedex, setPokedex} = useContext(GlobalStateContext)

    const addToPokedex = () => {
        const pokeIndex = pokemons.findIndex((item) => item.name === props.poke.name)

        const newPokemonsList = [...pokemons]
            newPokemonsList.splice(pokeIndex, 1)

        const orderedPokemonsList = newPokemonsList.sort((a, b) => {
            return a.id - b.id
        })

        const newPokedexList = [...pokedex, props.poke]

        const orderedPokedex = newPokedexList.sort((a, b) => {
            return a.id - b.id
        })

        setPokedex(orderedPokedex)
        setPokemons(orderedPokemonsList)
    }

    const removePokedex = () => {
        const pokeIndex = pokedex.findIndex((item) => item.name === props.poke.name)
      
          const newPokedexList = [...pokedex]
          newPokedexList.splice(pokeIndex, 1)
          const orderedPokedex = newPokedexList.sort((a, b) => {
            return a.id - b.id
          })
      
          const newPokemonsList = [...pokemons, props.poke]
          
          const orderedPokemonsList = newPokemonsList.sort((a, b) => {
            return a.id - b.id
          })

        setPokedex(orderedPokedex)
        setPokemons(orderedPokemonsList)
    }

    return (
    <PokeContainer>

        <ImgContainer>
            <PokeImage src={props.poke && props.poke.sprites.front_default} />
        </ImgContainer>

        <ButtonsContainer>
            <Button onClick={ props.isPokedex ? removePokedex : addToPokedex }>
             { props.isPokedex ? "Remover da Pokédex" : "Adicinar a Pokédex" }
             </Button>
            <Button onClick={ () => goToPokeDetail(history, props.poke.name, props.isPokedex)  }> Ver detalhes </Button>
        </ButtonsContainer>

    </PokeContainer>
    )
}

export default PokemonCard