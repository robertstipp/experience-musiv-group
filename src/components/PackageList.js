import React from "react"
import PackageCard from "./PackageCard"

const PackageList = ({ packages = [] }) => {
  return (
    <section className="package-list">
      {packages.map(pack => {
        const {
          id,
          packageTitle: title,
          price,
          products: { products },
        } = pack
        return (
          <PackageCard
            key={id}
            title={title}
            price={price}
            products={products}
          />
        )
      })}
    </section>
  )
}

export default PackageList
