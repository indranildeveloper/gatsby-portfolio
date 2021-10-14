/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Portfolio Website - Indranil Halder",
    description: "This is website portfolio website",
    author: "Indranil Halder",
    twitterUsername: "@developerindranil",
    image: "/twitter-img.png",
    siteUrl: "https://youtube.com"
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`
      }
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:1339`,
        queryLimit: 1000, // Default to 100
        singleTypes: [`about`],
        contentTypes: [`jobs`, `projects`, `blogs`]
      }
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Montserrat`,
            variants: [`400`, `700`]
          },
          {
            family: `Josefin Sans`,
            variants: [`500`]
          }
        ]
      }
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-scroll-indicator`,
      options: {
        // Configure color of the scroll indicator
        color: "#62009C",
        // Height of the scroll indicator
        height: "10px",
        // Configure paths where the scroll indicator will appear
        // paths: ["/", "/blog/**"],
        // Configure the z-index of the indicator element
        zIndex: `9999`
      }
    }
  ]
}
