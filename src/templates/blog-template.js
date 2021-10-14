import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import ReactMarkdown from "react-markdown"
import Seo from "../components/Seo"

function blogTemplate({ data }) {
  const { content, title, description } = data.blog
  return (
    <Layout>
      <Seo title={title} description={description} />
      <section className="blog-template">
        <div className="section-center">
          <article className="blog-content">
            <ReactMarkdown>{content}</ReactMarkdown>
          </article>
          <Link to="/blog" className="btn center-btn ">
            Go To Blogs
          </Link>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query GetSingleBlog($slug: String) {
    blog: strapiBlogs(slug: { eq: $slug }) {
      content
      title
      description
    }
  }
`

export default blogTemplate
