import React from "react"
import ArtistsList from "./ArtistsList"
import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
  {
    allContentfulArtist {
      nodes {
        name
        bio {
          bio
        }
        image {
          gatsbyImageData(placeholder: TRACED_SVG, layout: FULL_WIDTH)
        }
      }
    }
  }
`

const AllArtists = () => {
  const data = useStaticQuery(query)
  const artists = data.allContentfulArtist.nodes
  return (
    <section>
      <ArtistsList artists={artists} />
    </section>
  )
}

export default AllArtists
