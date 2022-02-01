import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import slugify from "slugify"

const ArtistsList = ({ artists = [] }) => {
  return (
    <div>
      <div className="artists-list">
        {artists.map(artist => {
          const { id, name, image } = artist
          const pathToImage = getImage(image)
          const slug = slugify(name, { lower: true })
          return (
            <Link key={id} to={`/${slug}`} className="artist">
              <GatsbyImage
                image={pathToImage}
                className="artist-img"
                alt={name}
              />
              <h5>{name}</h5>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default ArtistsList
