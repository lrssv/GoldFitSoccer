import React from 'react'
import { Link } from 'react-router-dom'

import Logo from '../../_assets/logo.png'
import ButtonFilled from '../../_components/button/index.js'


import TextField from '@material-ui/core/TextField';

import './styles.css'

export default function LoginCreditals (){
    return (
        <div className="container">
            <img className="img-logo" src={Logo} alt="logo"/>
            <div className="form">
                <div className="input-email">
                    <p>E-mail</p>
                    <TextField style={{width:300}} id="outlined-basic" label="" variant="outlined" />
                </div>
                <div className="input-password"> 
                    <p>Senha</p>
                    <TextField  style={{width:300}} id="outlined-basic" label="" variant="outlined" />
                </div>  
            </div>
            <ButtonFilled className="btn-login" route="/home" text="Entrar"/>
            <p className="forgot-password">Esqueceu a senha?</p>
            <div className="login-recover">
                <Link to="\" >Clique aqui </Link>
                <p>para recuperar</p>
            </div>
        </div>
    )
}