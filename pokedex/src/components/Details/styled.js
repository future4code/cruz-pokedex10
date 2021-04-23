import styled from 'styled-components'

export const Container = styled.div`
    display: grid;
    text-align: center;

    @media screen and (min-width: 300px) and (max-width: 420px) {
        display: flex;
        flex-direction: column;
    }
`

export const PokeTitle = styled.h1`
    display: flex;
    justify-content: center;
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: #373ca6;
    font-size: 3em; color: #f2c230;
    text-shadow: 3px 3px 5px #d99f6c;

    @media screen and (min-width: 300px) and (max-width: 420px) {
        font-size: 2em;
    }
`

export const MainContainer = styled.div`
    display: grid;
    text-align: center;
    margin: 50px;
    height: 100vh;
    grid-template-columns: 1fr repeat(2, 2fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 40px;
    grid-row-gap: 0px;

    @media screen and (min-width: 300px) and (max-width: 420px) {
        display: flex;
        flex-direction: column;
        font-size: 0.7em;
    }
`

export const ContainerLeft = styled.div`
    grid-area: 1 / 1 / 2 ;
    background-color: blue;
    backdrop-filter: blur(3px);
    background-color: #373ca630;

    @media screen and (min-width: 300px) and (max-width: 420px) {
        display: flex;
        flex-direction: row;
    }
`

export const ContainerCenter = styled.div`
    grid-area: 1 / 2 / 2 ;
    backdrop-filter: blur(3px);
    background-color: #373ca630;
    -webkit-text-stroke-width: 0.5px;
    -webkit-text-stroke-color: #02065970;
    color: #373ca6;

    h1 {
        padding-top: 20px;
    }

    p {
        padding-top: 10px;
    }
`

export const ContainerRight = styled.div`
    grid-area: 1 / 3 / 2 ;
    backdrop-filter: blur(3px);
    background-color: #373ca630;
    -webkit-text-stroke-width: 0.5px;
    -webkit-text-stroke-color: #02065970;
    color: #373ca6;

    h1 {
        padding-top: 20px;
    }

    p {
        padding-top: 10px;
    }
`

export const FrontBox = styled.div`
    
`
export const FrontImg = styled.img`
    width: 250px;

    @media screen and (min-width: 300px) and (max-width: 420px) {
        width: 150px;
    }
`

export const BackImg = styled.img`
    width: 250px;

    @media screen and (min-width: 300px) and (max-width: 420px) {
        width: 150px;
    }
`

export const BackBox = styled.div`
    
`
export const Description = styled.div`
    
`

