import React from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { goToLastPage, goToPokedex } from '../../routes/coordinator'

import Header from '../../components/Header/Header'

const PokeDetail = () => {
    const history = useHistory()

    return(
        <div>
            <Header/>
            <h1>PokeDetail</h1>
            <button onClick={() => goToLastPage(history)}>Voltar</button>
            <button onClick={ () => goToPokedex(history) }>Pokedex</button>
        </div>
    )
}

export default PokeDetail