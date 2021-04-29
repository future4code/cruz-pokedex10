import React from 'react'

import Logo from '../../assets/logo.png'

import { Container } from './styled'

const Header = () => {
    return (
        <Container>
            <img src={ Logo } alt='pokedex_logo'/>

        </Container>
    )
}

export default Header