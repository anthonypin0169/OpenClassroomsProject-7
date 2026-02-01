import { useParams, Navigate } from "react-router-dom"
import rentals from "../../data/rentals.json"
import Collapse from "../../components/Collapse/Collapse"
import Carousel from "../../components/Carousel/Carousel"
import StarActive from "../../img/star-active.svg"
import StarInactive from "../../img/star-inactive.svg"

function RentalDetails() {
    const { rentalId } = useParams()
    const rental = rentals.find(item => item.id === rentalId)

    if (!rental) {
    return <Navigate to="/Error" replace />
    }

    return (
    <main className="rental-details">
        <Carousel pictures={rental.pictures} />
        
        <div className="rental-content">
            <div className="rental-content__info-grp-1">
                <h1 className="rental-content__info-grp-1--title">{rental.title}</h1>
                <h2 className="rental-content__info-grp-1--loc">{rental.location}</h2>    
            </div>

            <div className="rental-content__info-grp-2">
                <div className="rental-content__info-grp-2--host">
                    <span>{rental.host.name}</span>
                    <img src={rental.host.picture} alt={rental.host.name} />
                </div>

                <div className="rental-content__info-grp-2--rating">
                    {[1,2,3,4,5].map((star) => (
                        <img 
                        key={star}
                        src={star <= Number(rental.rating) ? StarActive : StarInactive }
                        alt="rating star"
                        className="star"
                        />
                    ))}
                </div>
            </div>
        </div>
        
        <div className="rental-details__collapses">
            <Collapse
            title="Description"
            content={rental.description}
            />
            <Collapse
            title="Equipements"
            content={rental.equipments}
            />
        </div>
    </main>
    )
}

export default RentalDetails