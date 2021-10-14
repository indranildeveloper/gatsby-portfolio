import React from "react"
import { graphql } from "gatsby"
import Projects from "../components/Projects"
import Seo from "../components/Seo"
import Layout from "../components/Layout"

function ProjectsPage({
  data: {
    allStrapiProjects: { nodes: projects },
  },
}) {
  return (
    <Layout>
      <section className="projects-page-section">
        <Projects title="All Projects" projects={projects} />
      </section>
    </Layout>
  )
}
export const query = graphql`
  {
    allStrapiProjects {
      nodes {
        github
        id
        description
        title
        url
        image {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
          }
        }
        stack {
          id
          title
        }
      }
      totalCount
    }
  }
`

export default ProjectsPage
