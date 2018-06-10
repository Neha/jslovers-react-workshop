import React from 'react'
import profilePic from './images/neha.jpg'

const Header = (props) => {
    return(
        <header>
        <figure>
            <img src={profilePic} alt={props.title} title={props.title} />
        </figure>
        <h1>{props.name}</h1>
        </header>
    )
}

export default Header