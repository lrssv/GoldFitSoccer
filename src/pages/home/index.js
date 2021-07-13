import React from 'react'

import './styles.css'

import photo from './../../_assets/athlete-image.png'
import Card from './../../_components/cards'
import Header from './../../_components/header'

import Sidebar from '../../_components/burger-menu/Sidebar'

import Tabs from './../../_components/table/tabs'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Slider from './../../_components/slider'

export default function InitialView(){
    return (
        <div className="home-container">
          <Slider/>
        </div>
      );
}

/* 
Table

<h1>Potencial Esportivo</h1>
          <div className="container-home">
          <Tabs>
            <div label="Potencial Esportivo">
              See ya later, <em>Alligator</em>!
            </div>
            <div label="Fatores Antropométricos">
              After 'while, <em>Crocodile</em>!
            </div>
            <div label="Fatores Fisico-motores">
              Nothing to see here, this tab is <em>extinct</em>!
            </div>
            <div label="Maturação Biológica">
              See ya later, <em>Alligator</em>!
            </div>
            <div label="Apoio dos Familiares">
              After 'while, <em>Crocodile</em>!
            </div>
            <div label="Habilidades Táticas">
              Nothing to see here, this tab is <em>extinct</em>!
            </div>
          </Tabs>
        </div>



return (
        <Router>
        <Sidebar />
        <Switch>
        </Switch>
      </Router>
    );
    /*

CARD
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