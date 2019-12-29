import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import {
    Login,
    Dashboard,
    New,
} from './pages/stack'

//Switch faz com que apenas uma rota seja exibida por vez.
export default function Routes (){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/new" component={New} />
            </Switch>
        </BrowserRouter>
    )
}