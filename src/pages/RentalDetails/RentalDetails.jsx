import { useParams, Navigate } from "react-router-dom"
import rentals from "../../data/rentals.json" 
import Collapse from "../../components/Collapse/Collapse"

function RentalDetails () { 
    const {rentalId} = useParams()
    const rental = rentals.find((item) => item.id === rentalId)

    if (!rental){
        return <Navigate to ="/Error" replace />
    }

    return (
        <main className="rental-details">
            <img className="rental-details__banner" 
            src={rental.cover} 
            alt={rental.title} 
            />
            <h1>{rental.title}</h1>

            <div className="rental-details__collapses">
                <Collapse title = "Description" content = {rental.description} /> 
                <Collapse title = "Equipements" content = {rental.equipments} />     
            </div>
        </main>
    )
}

export default RentalDetails