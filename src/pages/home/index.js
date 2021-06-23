import React from 'react'

import './styles.css'

import photo from './../../_assets/athlete-image.png'
import Card from './../../_components/cards'
import Header from './../../_components/header'

import Sidebar from '../../_components/burger-menu/Sidebar'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export default function InitialView(){
    return (
        <Router>
        <Sidebar />
        <Switch>
        </Switch>
      </Router>
    );
}

      /*</div>
            <Header/>
            <div className="cards">
                <Card 
                    id="2458795"
                    photo={photo}
                    name="Lucas Morais Costa"
                    date="01/12/1994"
                    position="Goleiro"
                    club="Atlético Mineiro"
                />
            </div>
            </div>*/