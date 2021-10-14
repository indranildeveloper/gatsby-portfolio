import React from "react"
import SocialLinks from "../constants/socialLinks"

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <SocialLinks styleClass="footer-links social-links"></SocialLinks>
        <h4>Copyright&copy; {new Date().getFullYear()}, Indranil Halder</h4>
      </div>
    </footer>
  )
}

export default Footer
