import React from 'react'
import { Link } from 'react-router-dom'

import Logo from '../../_assets/logo.png'
import ButtonFilled from '../../_components/button/index.js'

import TextField from '@material-ui/core/TextField';



export default function LoginCreditals (){
    return(
        <div className="container">
            <img className="img-logo" src={Logo} alt="logo"/>
            <form>
                <div className="input-email">
                    <p>E-mail</p>
                    <TextField id="outlined-basic" label="" variant="outlined" />
                </div>
                <div className="input-password"> 
                    <p>senha</p>
                    <TextField id="outlined-basic" label="" variant="outlined" />
                </div>    
            </form>
            <ButtonFilled className="btn-login" route="/" text="Entrar"/>
            <p>Esqueceu a senha?</p>
            <div className="login-recover">
                <Link to="">Clique aqui </Link>
                <p>para recuperar</p>
            </div>
        </div>
    )
}