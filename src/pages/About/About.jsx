import React from "react"
import "./About.css"
import Banner from "../../components/Banner/Banner"
import Collapse from "../../components/Collapse/Collapse"

function About() {
  return (
    <main>
      <Banner />
      <div className="collapse-container">
        <Collapse title= "Fiabilité">Les annonces postées sur Kasa garentissent une fiabilité totale. Lest photots sont conformes aux logements, et toutes les informations sont régulierement verifiées par nos équipes.</Collapse>
        <Collapse title= "Respect">La bienveillance fait partie des valeurs fondatrice de Kasa. Tout comportement discriminatoire ou de perturbation de voisinage entrainera une exclusion de notre plateforme.</Collapse>
        <Collapse title= "Service">La qualité du service est au coeur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hotes ou nos locataires, soit empreinte de respect et de bienveillance.</Collapse>
        <Collapse title= "Sécurité">La sécurité est la priorité de Kasa. Aussi bien pour nos hotes que pour les voyageurs. Chaque logements correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hote qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hotes</Collapse>
      </div>
    </main>
  )

}

export default About