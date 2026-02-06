import {useState} from 'react'
import "./Collapse.css"
import { FaChevronUp, FaChevronDown } from 'react-icons/fa'

function Collapse ({title, children}) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="collapse">
            <button className={`collapse__header ${isOpen ? "open" : ""}`}
                onClick={() => setIsOpen(!isOpen)}>
                <h3 className="collapse__title">{title}</h3>
                <FaChevronUp className={`collapse__arrow ${isOpen ? "open" : ""}`} />
            </button>
            <div className={`collapse__content ${isOpen ? "open" : ""}`}aria-hidden={!isOpen}>
                <div className="collapse__txt">{children}</div>
            </div>
        </div>
    )
}

export default Collapse