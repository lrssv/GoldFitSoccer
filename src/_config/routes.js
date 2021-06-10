import { BrowserRouter, Route, Switch } from 'react-router-dom'
import React from 'react'

import Login from '../pages/login'
import LoginCreditals from '../pages/login-credentials'
import Home from '../pages/home'

export default function Routes(){
    return(
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Login}/>
            <Route path="/login-credentials" exact component={LoginCreditals}/>
            <Route path="/home" exact component={Home}/>
        </Switch>
        </BrowserRouter>
    );
}
