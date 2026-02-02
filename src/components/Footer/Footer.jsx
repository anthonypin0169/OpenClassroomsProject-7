import React from "react"
import "./Footer.css"
import logo from "../../img/WhiteLOGO.png"
import Logo from "../Logo/Logo"

function Footer() {
    return (
        <section className="footer">
            <Logo src={logo} />
            <h2 className="footer__title">© 2020 Kasa. All rights reserved</h2>
        </section>
    )
}

export default Footer