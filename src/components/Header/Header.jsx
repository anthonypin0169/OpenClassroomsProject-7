import React from "react"
import "./Header.css"
import Logo from "../Logo/Logo"
import logo from "../../img/LOGO.png"
import Nav from "../Nav/Nav"

function Header() {
    return(
        <header className="header">
            <Logo src = {logo} />
            <Nav />
        </header>
    )
}

export default Header