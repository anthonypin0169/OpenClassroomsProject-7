import React from "react"
import "./Header.css"

import Logo from "../Logo/Logo"
import Nav from "../Nav/Nav"

function Header() {
    return(
        <header className="header">
            <Logo />
            <Nav />
        </header>
    )
}

export default Header