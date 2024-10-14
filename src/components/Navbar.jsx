import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <nav>
            <NavLink style={{marginLeft: "20px"}} to="/">Home</NavLink>
            <NavLink style={{marginLeft: "20px"}} to="/contact">Contact Us</NavLink>
            <NavLink style={{marginLeft: "20px"}} to="/users">Users</NavLink>
        </nav>
    </div>
  )
}

export default Navbar