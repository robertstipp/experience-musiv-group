import React from "react"
import PackageCard from "../components/PackageCard"
import PackageList from "../components/PackageList"
import AllPackages from "../components/AllPackages"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

const Packages = () => {
  return (
    <Layout>
      <SEO />
      <main className="page">
        <AllPackages />
      </main>
    </Layout>
  )
}

export default Packages
