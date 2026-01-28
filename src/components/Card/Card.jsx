import { Link } from "react-router-dom"
import "./Card.css"

function Card({id, title, cover}) {
    return (
        <Link to = {`/rental/${id}`} className="card">
            <img className="card_img" 
            src={cover} 
            alt={title} 
            />
            <h2 className="card_title">{title}</h2>
        </Link>
    )
}

export default Card