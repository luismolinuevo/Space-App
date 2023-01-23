import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"

export default function Navbar() {
  return (
    <div className="navbar">
      <Link to="/">Home</Link>
      <Link to="/dailyimage">Daily Image</Link>
      <Link to="/mars">Rover Images</Link>
      <Link to="/nasaimages">Search</Link>
    </div>
  )
}
