import React from "react"
import Blog from "./Blog"
import Title from "./Title"
import { Link } from "gatsby"

function Blogs({ blogs, title, showLink }) {
  return (
    <section className="section blog-section">
      <div className="line section-title">
        <Title title={title} />
        <div className="underline" />
      </div>
      <div className="section-center blog-grid">
        {blogs.map(blog => {
          return <Blog key={blog.id} {...blog} />
        })}
      </div>
      {showLink && (
        <Link to="/blog" className="btn center-btn">
          Read More
        </Link>
      )}
    </section>
  )
}

export default Blogs
