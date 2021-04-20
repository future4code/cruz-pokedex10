import React from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { goToHome } from '../../routes/coordinator'

import Header from '../../components/Header/Header'

const Pokedex = () => {
    const history = useHistory()

    return(
        <div>
            <Header/>
            <h1>Pokedex</h1>
            <button onClick = {() => goToHome(history)}>Voltar Para Home</button>
        </div>
    )
}

export default Pokedex