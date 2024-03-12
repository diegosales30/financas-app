import React from 'react'
import { Link } from 'react-router-dom'

export const LandingPage = () => {
  return (
    <div>
      <h1>Lading Page</h1>
      <Link to="/home">
        <p>Home</p>
      </Link>
    </div>
  )
}
