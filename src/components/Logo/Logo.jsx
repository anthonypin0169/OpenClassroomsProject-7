import React from "react"
import "./Logo.css"

function Logo ({src, alt="Kasa"}) {
    return (
        <img
        src={src}
        alt={alt}
        className="logo"
        />
    )
}

export default Logo