import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import PackageList from "./PackageList"

const query = graphql`
  {
    allContentfulPackage(sort: { fields: price, order: ASC }) {
      nodes {
        id
        packageTitle
        price
        products {
          products
        }
      }
    }
  }
`

const AllPackages = () => {
  const data = useStaticQuery(query)
  const packages = data.allContentfulPackage.nodes
  console.log(packages)
  return (
    <section>
      <PackageList packages={packages} />
    </section>
  )
}

export default AllPackages
