import React from "react"
import "./Header.scss"

import Logo from "./Logo"
import Nav from "./Nav"

function Header() {
    return(
        <header className="header">
            <Logo />
            <Nav />
        </header>
    )
}

export default Header