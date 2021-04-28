import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react';

import Login from '../pages/login'

export default function Routes(){
    return(
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Login}/>
        </Switch>
        </BrowserRouter>
    );
}
