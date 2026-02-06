import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home/Home.jsx"
import About from "./pages/About/About.jsx"
import Error from "./pages/Error/Error.jsx"
import Header from "./components/Header/Header.jsx"
import Footer from "./components/Footer/Footer.jsx"
import RentalDetails from "./pages/RentalDetails/RentalDetails.jsx"
import RentalData from "./data/rentals.json"

function App() {
return (
  <BrowserRouter>
    <Header />

    <Routes>
      <Route path="/" element={<Home rentals = {RentalData}/>} />
      <Route path="/about" element={<About />} />
      <Route path="/rental/:rentalId" element={<RentalDetails rentals = {RentalData}/>} />
      <Route path="*" element={<Error />} />
    </Routes>

    <Footer />
  </BrowserRouter>
  )
}

export default App