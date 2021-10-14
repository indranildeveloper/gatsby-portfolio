import React from "react"
import PropTypes from "prop-types"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { FaGithubSquare, FaShareSquare } from "react-icons/fa"

function Project({ description, title, github, stack, url, image, index }) {
  return (
    <article className="project">
      {image && (
        <GatsbyImage
          image={getImage(image)}
          className="project-img"
          alt={title}
        />
      )}

      <div className="project-info">
        <span className="project-number">0{index + 1}.</span>
        <h3>{title || "Project Title"}</h3>
        <p className="project-desc">{description || "Project Description"}</p>
        <div className="project-stack">
          {stack.map(item => {
            return <span key={item.id}>{item.title}</span>
          })}
        </div>
        <div className="project-links">
          <a href={github} target="_blank">
            <button className="btn">
              <FaGithubSquare className="project-icon" /> Github
            </button>
          </a>
          <a href={url} target="_blank">
            <button className="btn btn-purple">
              <FaShareSquare className="project-icon" /> View
            </button>
          </a>
        </div>
      </div>
    </article>
  )
}
Project.propTypes = {
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  stack: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Project
