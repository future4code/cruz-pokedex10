import React from 'react'
import styled from 'styled-components'

const MainContainer = styled.div`
    height: 80vh;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const ContainerLeft = styled.div`
    margin-top: 10%;
    height: 80%;
    width: 50%;
`
const ContainerRight = styled.div`
    height: 80%;
    width: 50%;
`

const FrontBox = styled.div`
    background-color: grey;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 3%;
    height: 40%;
    width: 25%;
`
const FrontImg = styled.img`
    width: 170px;
`

const BackImg = styled.img`
    width: 170px;
`

const BackBox = styled.div`
    background-color: grey;
    margin-left: auto;
    margin-right: auto;
    height: 40%;
    width: 25%;
`
const Description = styled.div`
    background-color: grey;
    height: 85%;
    width: 70%;
    margin-top: 10%;
`

const Details = () => {

  return (
    <div>
      <MainContainer>
        <ContainerLeft>
            <FrontBox>
                <FrontImg src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png'></FrontImg>
            </FrontBox>
            <BackBox>
                <BackImg src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/4.png'></BackImg>
            </BackBox>
        </ContainerLeft>
        <ContainerRight>
            <Description></Description>
        </ContainerRight>
      </MainContainer>
    </div>
  )
};

export default Details;