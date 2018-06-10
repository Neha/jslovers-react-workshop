import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Nav = () => {
    return(
        <ul className="nav">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/aboutme" activeClassName="active">About Me </NavLink></li>
            <li><a href="#">Portfolio</a></li>
        </ul>
    )
}

export default Nav