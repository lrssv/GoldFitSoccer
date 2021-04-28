import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css'

import Logo from '../../_assets/logo.png'
import Coach from '../../_assets/coach.svg'
import Athlete from '../../_assets/athlete.svg'
import Researcher from '../../_assets/research.svg'
import Admnistrator from '../../_assets/adm.svg'

export default function Login() {
    return (
        <div className="container">
            <img className="img-logo" src={Logo} alt="logo"/>
            <h3 className="text-header">Realizar login como:</h3>
            <div className="grid-icons">
                <figure>
                    <img className="img-coach" src={Coach} alt="Treinador"/>
                    <Link className="link-coach" to="">Treinador</Link>
                </figure>
                <figure>
                    <img className="img-athlete" src={Athlete} alt="Atleta"/>
                    <Link className="link-athlete" to="">Atleta</Link>
                </figure>
                <figure>
                    <img className="img-researcher" src={Researcher} alt="Pesquisador"/>
                    <Link className="link-researcher" to="">Pesquisador</Link>
                </figure>
                <figure>
                    <img className="img-adm" src={Admnistrator} alt="Admnistrador"/>
                    <Link className="link-adm" to="">Admnistrador</Link>
                </figure>
            </div>
            <div className="grid-register">
                <div className="coachInvited">
                    <p>É um treinador convidado?</p>
                    <Link className="link-coachInvited" to="">Cadastre-se aqui</Link>
                </div>
                <div className="coach">
                    <p>É um treinador?</p>
                    <Link className="link-coach" to="">Cadastre-se aqui</Link>
                </div>
                <div className="athlete">
                    <p>É um treinador convidado?</p>
                    <Link className="link-athlete" to="">Cadastre-se aqui</Link>
                </div>
            </div>
        </div>
    )
}