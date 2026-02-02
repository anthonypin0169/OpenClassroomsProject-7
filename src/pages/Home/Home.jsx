import React from "react"
import "./Home.css"
import Banner from "../../components/Banner/Banner"
import Card from "../../components/Card/Card"
import Rentals from "../../data/rentals.json"
import BannerImg from "../../img/BannerImg.png"

function Home() {
  return (
    <main>
      <Banner pics={BannerImg} />
      <section className="cards">
        {Rentals.map((rental) => (
          <Card
          key={rental.id}
          id={rental.id}
          title={rental.title}
          cover={rental.cover}
          />
        ))}
      </section>
    </main>
  )
}

export default Home
