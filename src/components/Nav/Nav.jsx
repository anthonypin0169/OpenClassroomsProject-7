import React from "react"
import "./Nav.css"

import { NavLink } from "react-router-dom"

function Nav() {
    return (
        <nav className="nav">
            <NavLink to="/" className= {({isActive}) => isActive ? "nav_link active" : "nav__link"} >Acceuil</NavLink>
            <NavLink to="/about" className={({isActive}) => isActive ? "nav_link active" : "nav__link"}>A propos</NavLink>
        </nav>
    )
}

export default Nav 