import React from "react"
import "./Banner.css"

function Banner({pics, title = "Chez vous, partout et ailleurs"}) {
    return (
        <div className="banner"
        style={{backgroundImage : `url(${pics})`}}>
            {title && <h1 className="banner__title">{title}</h1>}
        </div>
    )
}

export default Banner