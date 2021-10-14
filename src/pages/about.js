import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/Layout"
import Title from "../components/Title"
import Seo from "../components/Seo"

function AboutPage({
                     data: {
                       about: { nodes }
                     }
                   }) {
  const { info, stack, title, image } = nodes[0]

  return (
    <Layout>
      <Seo title="About" description="This is About Page" />
      <section className="about-page">
        <div className="section-center about-center">
          <GatsbyImage
            image={getImage(image)}
            className="about-img"
            alt={title}
          />
          <article className="about-text">
            <div className="section-title about-title">
              <Title title={title} />
              <div className="underline" />
            </div>
            <p>{info}</p>
            <div className="about-stack">
              {stack.map(item => {
                return <span key={item.id}>{item.title}</span>
              })}
            </div>
          </article>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    about: allStrapiAbout {
      nodes {
        stack {
          id
          title
        }
        title
        info
        image {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
          }
        }
      }
    }
  }
`

export default AboutPage
