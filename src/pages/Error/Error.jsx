import React from "react"
import "./Error.css"
import { NavLink } from "react-router-dom"

function Error() {
  return (
    <main className="error">
      <h1 className="error__h1">404</h1>
      <h2 className="error__h2">Oups! La page que vous demandez n'existe pas.</h2> 
      <NavLink to="/" className="error__link">Retourner sur la page d'acceuil</NavLink> 
    </main>
  )

}

export default Error