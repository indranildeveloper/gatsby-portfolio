import React from "react"
import PropTypes from "prop-types"
import { FaArrowRight } from "react-icons/fa"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

function Blog({ id, title, image, date, category, slug, description }) {
  return (
    <Link to={`/blogs/${slug}`} className="blog" key={id}>
      <article>
        {image && (
          <GatsbyImage
            image={getImage(image)}
            className="blog-img"
            alt={title}
          />
        )}
        <div className="blog-card">
          <h4>{title || "Title"}</h4>
          <p>{description || "Description"}</p>
          <div className="blog-footer">
            <p className="blog-category">{category}</p>
            <p className="blog-date">{date}</p>
          </div>

          <button className="btn btn-blog">
            Read More <FaArrowRight />
          </button>
        </div>
      </article>
    </Link>
  )
}

Blog.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  date: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default Blog
