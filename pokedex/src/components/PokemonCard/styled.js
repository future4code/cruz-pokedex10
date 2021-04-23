import styled from 'styled-components'

export const PokeContainer = styled.div`
    backdrop-filter: blur(3px);
    background-color: #373ca630;
    height: 35vh;
    width: 250px;
    margin: 50px;
    display: grid;
    grid-template-rows: 90% 10%;

    :hover {
        box-shadow: 1px 1px 10px #00000050;
    }
`

export const ImgContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const PokeImage = styled.img`
    height: 80%;
`

export const ButtonsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
`