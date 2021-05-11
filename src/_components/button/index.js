import React from 'react'
import { Link } from 'react-router-dom'

import './styles.css'

export default function ButtonFilled({route, text}){
    return(
        <buttom className="btn">
            <Link className="btn-filled" to={route}>{text}</Link>
        </buttom>
    )
  }