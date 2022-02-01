import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

export default function Home() {
  return (
    <Layout>
      <SEO />
      <main className="page">
        <header className="hero">
          <div className="hero-container">
            <div className="hero-text">
              <h3>
                BRANDING. SOCIAL MEDIA MARKETING. DIGITAL CONTENT STRATEGY.
                LICENSING. PLAYLISTING. PRESENTATION. AND EVERY ITERATION OF
                ILLUMINATION.
              </h3>
            </div>
          </div>
        </header>
        <div className="hero"></div>
      </main>
    </Layout>
  )
}
