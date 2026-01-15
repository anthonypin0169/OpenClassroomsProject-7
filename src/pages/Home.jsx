import React from "react"
import "./Home.scss"

import Banner from "../components/Banner"
import Card from "../components/Card"
import Rentals from "../data/rentals.json"

function Home() {
  return (
    <main>
      <Banner />
      <section className="cards">
        {Rentals.map((rental) => (
          <Card
          key={rental.id}
          title={rental.title}
          cover={rental.cover}
          />
        ))}
      </section>
    </main>
  )
}

export default Home
