import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Blogs from "../components/Blogs"

function BlogPage({
  data: {
    allStrapiBlogs: { nodes: blogs },
  },
}) {
  return (
    <Layout>
      <section className="blog-page">
        <Blogs blogs={blogs} title="Blog Page" />
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiBlogs(sort: { fields: date, order: DESC }) {
      nodes {
        slug
        description
        date(formatString: "MMMM Do, YYYY")
        id
        title
        category
        image {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
          }
        }
      }
    }
  }
`

export default BlogPage
