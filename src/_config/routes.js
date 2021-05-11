import { BrowserRouter, Route, Switch } from 'react-router-dom'
import React from 'react'

import Login from '../pages/login'
import LoginCreditals from '../pages/login-credentials'

export default function Routes(){
    return(
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Login}/>
            <Route path="/login-credentials" exact component={LoginCreditals}/>
        </Switch>
        </BrowserRouter>
    );
}
