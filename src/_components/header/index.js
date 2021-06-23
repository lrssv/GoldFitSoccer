import React from 'react';
import { Link} from 'react-router-dom';

import './styles.css';
import Logo from '../../_assets/logo.png'

export default function Header() {
    return(
        <header className="nav-bar">
            <img src={Logo} alt="logo"/>
                <Link to="/" className="logo-img"></Link> 
        </header>
)}
