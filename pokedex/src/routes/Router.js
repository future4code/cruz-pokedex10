import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from '../screen/Home/Home'
import Pokedex from '../screen/Pokedex/Pokedex'
import PokeDetail from '../screen/PokeDetail/PokeDetail'

const Router = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/'>
                    <Home/>
                </Route>

                <Route exact path='/pokedex'>
                    <Pokedex/>
                </Route>

                <Route exact path='/pokedetail'>
                    <PokeDetail/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router