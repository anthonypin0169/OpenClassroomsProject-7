import React from "react"
import "./Logo.css"
import logo from "../../img/LOGO.png"

function Logo () {
    return (
        <img
        src={logo}
        alt="Kasa"
        className="logo"
        />
    )
}

export default Logo