import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/Layout"
import slugify from "slugify"
import SEO from "../components/SEO"

const ArtistTemplate = ({ data }) => {
  const {
    name,
    image,
    bio: { bio },
  } = data.contentfulArtist
  const pathToImage = getImage(image)
  return (
    <Layout>
      <SEO title="artist page" />
      <main className="page">
        <div className="artist-page">
          {/* hero */}
          <section className="artist-hero">
            <GatsbyImage image={pathToImage} alt={name} className="about-img" />
          </section>
          <article className="artist-info">
            <h2>{name}</h2>
            <p>{bio}</p>
          </article>
        </div>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query getSingleArtist($name: String) {
    contentfulArtist(name: { eq: $name }) {
      name
      bio {
        bio
      }
      image {
        gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
      }
    }
  }
`

export default ArtistTemplate
