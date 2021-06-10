import { Divider } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'

import './styles.css'


import photo from './../../_assets/athlete-image.png'
import Card from './../../_components/cards'

export default function InitialView(){
    return (
        <div className='home-container'>
            <Card 
                id="2458795"
                photo={photo}
                name="Lucas Morais Costa"
                date="01/12/1994"
                position="Goleiro"
                club="Atlético Mineiro"
            />
        </div>

    )
}