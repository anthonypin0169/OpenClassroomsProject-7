import React from "react"
import "./Nav.css"

import { NavLink } from "react-router-dom"

function Nav() {
    return (
        <nav className="nav">
            <NavLink to="/" className="nav_link">Acceuil</NavLink>
            <NavLink to="/about" className="nav_link">A propos</NavLink>
        </nav>
    )
}

export default Nav