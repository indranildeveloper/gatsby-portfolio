import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import SocialLinks from "../constants/socialLinks"

function Hero() {
  return (
    <header className="hero">
      <section className="section-center hero-center">
        <article className="hero-info">
          <div>
            <div className="line">
              <h1>I am Indranil</h1>
              <div className="underline" />
            </div>
            <h4>Full Stack Web Developer</h4>
            <div className="hero-btn">
              <Link to="/contact" className="btn">
                Contact Me
              </Link>
              <Link to="/contact" className="btn btn-purple">
                Download Resume
              </Link>
            </div>
            <div className="margin-bottom">
              <SocialLinks />
            </div>
          </div>
        </article>
        <StaticImage
          src="../assets/images/hero-img.svg"
          alt="portfolio"
          className="hero-img"
          placeholder="blurred"
        />
      </section>
    </header>
  )
}

export default Hero
