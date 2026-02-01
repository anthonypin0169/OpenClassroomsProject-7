import { useState } from "react"
import "./Carousel.css"

function Carousel({ pictures }) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const total = pictures.length

    const nextSlide = () => {
    setCurrentIndex(
    currentIndex === total - 1 ? 0 : currentIndex + 1
    )
}

    const prevSlide = () => {
    setCurrentIndex(
    currentIndex === 0 ? total - 1 : currentIndex - 1
    )
}

    if (total === 1) {
    return (
    <div className="carousel">
    <img src={pictures[0]} alt="Logement" />
    </div>
    )
}

    return (
    <div className="carousel">
    <img
    src={pictures[currentIndex]}
    alt={`Slide ${currentIndex + 1}`}
    className="carousel__image"
    />

    <button className="carousel__prev" onClick={prevSlide}>
    ‹
    </button>

    <button className="carousel__next" onClick={nextSlide}>
    ›
    </button>

    <span className="carousel__counter">
    {currentIndex + 1} / {total}
    </span>
    </div>
    )
}

export default Carousel