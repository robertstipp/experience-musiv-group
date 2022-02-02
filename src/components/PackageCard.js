import React from "react"

const PackageCard = ({ price, title, items }) => {
  return (
    <article>
      <h3>{title}</h3>
      <h4>{price}</h4>
      {items.map(item => {
        return <p>{item}</p>
      })}
    </article>
  )
}

export default PackageCard
