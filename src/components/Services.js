import React from "react"
import Title from "./Title"
import services from "../constants/services"

function Services() {
  return (
    <section className="section bg-dark">
      <div className="line section-title">
        <Title title="services" />
        <div className="underline" />
      </div>
      <div className="section-center services-center">
        {services.map(service => {
          const { id, title, icon, text } = service
          return (
            <article key={id} className="service">
              {icon}
              <h4>{title}</h4>
              <p>{text}</p>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Services
