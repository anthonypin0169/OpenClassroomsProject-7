import React from "react"
import "./Footer.css"

import Logo from "../Logo/Logo"

function Footer() {
    return (
        <section className="footer">
            <Logo />
            <h2 className="footer_title">© 2020 Kasa. All rights reserved</h2>
        </section>
    )
}

export default Footer