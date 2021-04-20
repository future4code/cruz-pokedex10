import React from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { goToHome } from '../../routes/coordinator'

import Header from '../../components/Header/Header'
import { Button } from '../../constants/buttons'

const Pokedex = () => {
    const history = useHistory()

    return(
        <div>
            <Header/>
            <h1>Pokedex</h1>
            <Button onClick = {() => goToHome(history)}>Voltar Para Home</Button>
        </div>
    )
}

export default Pokedex