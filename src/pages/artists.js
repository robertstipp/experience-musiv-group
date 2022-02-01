import React from "react"
import AllArtists from "../components/AllArtists"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

const Artists = () => {
  return (
    <Layout>
      <SEO title="Artists" />
      <main className="page">
        <AllArtists />
      </main>
    </Layout>
  )
}

export default Artists
