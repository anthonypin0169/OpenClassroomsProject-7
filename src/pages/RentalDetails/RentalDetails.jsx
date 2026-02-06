import { useParams, Navigate } from "react-router-dom"
import Collapse from "../../components/Collapse/Collapse"
import Carousel from "../../components/Carousel/Carousel"
import StarActive from "../../img/star-active.svg"
import StarInactive from "../../img/star-inactive.svg"
import "./RentalDetails.css"

function RentalDetails({rentals}) {
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
                <h2 className="rental-content__info-grp-1--title">{rental.title}</h2>
                <h2 className="rental-content__info-grp-1--loc">{rental.location}</h2>
                <div className="rental-content__info-grp-1--tags">{rental.tags.map((tag, index) => (
                    <span key={index} className="tag">{tag}</span>
                ))}</div>
            </div>

            <div className="rental-content__info-grp-2">
                <div className="rental-content__info-grp-2--host">
                    <span className="rental-content__info-grp-2--host--name">{rental.host.name}</span>
                    <img className="rental-content__info-grp-2--host--pics"
                    src={rental.host.picture} alt={rental.host.name} />
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
            <Collapse title="Description">
                {rental.description}
            </Collapse>

            <Collapse title="Equipements">
                <ul className="equipments-list">
                    {rental.equipments.map((equip, index) => ( <li key={index}>{equip}</li> ))}
                </ul>
            </Collapse> 
        </div>
    </main>
    )
}

export default RentalDetails