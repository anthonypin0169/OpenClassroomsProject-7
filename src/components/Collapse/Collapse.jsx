import {useState} from 'react'
import "./Collapse.css"

function Collapse ({title, children}) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="collapse">
            <button className={`collapse__header ${isOpen ? "open" : ""}`}
                onClick={() => setIsOpen(!isOpen)}>
                <h3 className="collapse__title">{title}</h3>
                <span className="collapse__arrow"></span>
            </button>
            <div className={`collapse__content ${isOpen ? "open" : ""}`}aria-hidden={!isOpen}>
                <div className="collapse__txt">{children}</div>
            </div>
        </div>
    )
}

export default Collapse