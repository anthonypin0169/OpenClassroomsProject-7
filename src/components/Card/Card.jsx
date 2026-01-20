import React from "react"
import "./Card.css"

function Card({title, cover}) {
    return (
        <article className="card">
            <img className="card_img" 
            src={cover} 
            alt={title} 
            />
            <h2 className="card_title">{title}</h2>
        </article>
    )
}

export default Card