import React from "react"
import Layout from "../components/Layout"
import Title from "../components/Title"
import { StaticImage } from "gatsby-plugin-image"
import Seo from "../components/Seo"

function ContactPage() {
  return (
    <Layout>
      <section className="contact-page">
        <div className="section-title">
          <Title title="Get in Touch" />
          <div className="underline" />
        </div>
        <article className="contact-form">
          <StaticImage
            src="../assets/images/contact.svg"
            alt="contact"
            className="contact-img"
            placeholder="blurred"
          />
          <form action="https://formspree.io/f/xbjqgadr" method="POST">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Your Full Name"
                className="form-control"
              />
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Your Best Email"
                className="form-control"
              />
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Your Message"
                className="form-control"
                rows="7"
              />
              <button className="btn submit-btn" style={{ marginTop: "7px" }}>
                Submit
              </button>
            </div>
          </form>
        </article>
      </section>
    </Layout>
  )
}

export default ContactPage
