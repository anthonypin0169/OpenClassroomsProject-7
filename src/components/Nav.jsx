import React from "react"
import "./Nav.scss"

import { NavLink } from "react-router-dom"

function Nav() {
    return (
        <nav className="nav">
            <NavLink to="/">Acceuil</NavLink>
            <NavLink to="/about">Acceuil</NavLink>
        </nav>
    )
}

export default Nav