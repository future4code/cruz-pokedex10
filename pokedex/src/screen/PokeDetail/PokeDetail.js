import React from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { goToLastPage, goToPokedex } from '../../routes/coordinator'

import Header from '../../components/Header/Header'
import { Button } from '../../constants/buttons'
import Details from '../../components/Details/Details'

const PokeDetail = () => {
    const history = useHistory()

    return (
        <div>
            <Header/>
            <h1>PokeDetail</h1>
            <Button onClick={() => goToLastPage(history)}>Voltar</Button>
            <Button onClick={ () => goToPokedex(history) }>Pokedex</Button>
            <Details/>
        </div>
    )
}

export default PokeDetail