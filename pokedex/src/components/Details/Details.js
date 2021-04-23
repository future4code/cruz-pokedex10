import React, { useContext, useState, useEffect } from 'react'
import axios from 'axios'

import { useParams } from 'react-router-dom'
import GlobalStateContext from '../../global/GlobalStateContext'
import { BASE_URL } from '../../constants/api'

import { Container, MainContainer, ContainerLeft, FrontBox, FrontImg, BackImg, BackBox, ContainerCenter, ContainerRight, Description, PokeTitle } from './styled'

const Details = () => {
    const { name, telaPokedex } = useParams()
    const {pokemons, pokedex }=  useContext(GlobalStateContext)
    const [selectedPokemon, setSelectedPokemon] = useState({})

    useEffect(() => {
        let currentPokemon = []
        if(telaPokedex) {
            currentPokemon = pokedex.find((item) => {
                return item.name === name
            })
        } else {
            currentPokemon = pokemons.find((item) => {
                return item.name === name
            })
        }

        if(!currentPokemon) {
            axios
                .get(`${BASE_URL}/${name}`)
                .then((res) => setSelectedPokemon(res.data))
                .catch((err) => console.log(err.response.message))
        } else {
            setSelectedPokemon(currentPokemon)
        }
    }, [name, pokedex, pokemons, telaPokedex])

  return (
    <Container>
         <PokeTitle>{selectedPokemon.name}</PokeTitle>
      <MainContainer>
        <ContainerLeft>
            { selectedPokemon && selectedPokemon.sprites && ( 
            <>
                    <FrontBox>
                        <FrontImg src={ selectedPokemon.sprites.front_default }></FrontImg>
                    </FrontBox>
                    <BackBox>
                        <BackImg src={ selectedPokemon.sprites.back_default }></BackImg>
                    </BackBox>
            </>
            )}
        </ContainerLeft>
        <ContainerCenter>
            <Description>
            <h1>Poderes</h1>
            {selectedPokemon.stats && selectedPokemon.stats.map((stat) => {
                return (
                     <p key={stat.stat.name}><strong>{stat.stat.name}</strong>: {stat.base_stat}</p>
                )
            })}

            
            </Description>
        </ContainerCenter>
        <ContainerRight>
        <h1>Tipos</h1>

        {selectedPokemon.types && selectedPokemon.types.map((type) => {
            return (
                <p>{type.type.name}</p>
            )

            
        })}

        <h1>Ataques</h1>

        {selectedPokemon.moves && selectedPokemon.moves.map((move, index) => {
            return (
                index < 5 && <p>{move.move.name}</p>
            )
        })}
        </ContainerRight>
      </MainContainer>
    </Container>
  )
};

export default Details;