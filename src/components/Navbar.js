import React from "react"
import { FaBars } from "react-icons/fa"
import PageLinks from "../constants/links"

function Navbar({ toggleSidebar }) {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <h3>Indranil Halder</h3>
          <button type="button" className="toggle-btn" onClick={toggleSidebar}>
            <FaBars/>
          </button>
        </div>
        <PageLinks styleClass="nav-links"/>
      </div>
    </nav>
  )
}

export default Navbar
