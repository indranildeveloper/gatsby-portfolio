import React, { useState } from "react"
import NavBar from "./Navbar"
import Sidebar from "./Sidebar"
import Footer from "./Footer"
import "../assets/css/main.css"

function Layout({ children }) {
  const [isOpen, setIsOpen] = useState(false)
  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div>
      <NavBar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
