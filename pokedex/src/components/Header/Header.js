import React from 'react'
import styled from 'styled-components'

import Logo from '../../assets/logo.png'

import { Container } from './styled'

const Header = () => {
    return (
        <Container>
            <img src={ Logo } />

        </Container>
    )
}

export default Header