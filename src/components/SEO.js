import React from "react"
import { Helmet } from "react-helmet"

const SEO = ({ title, description }) => {
  return (
    <Helmet
      htmlAttributes={{ lang: "en" }}
      title="Experience Music Group"
    ></Helmet>
  )
}
export default SEO
