import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from '../screens/Home/Home'
import Pokedex from '../screens/Pokedex/Pokedex'
import PokeDetail from '../screens/PokeDetail/PokeDetail'

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

                <Route exact path='/pokedetail/:name'>
                    <PokeDetail/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router