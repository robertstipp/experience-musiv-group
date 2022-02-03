import React from "react"

const PackageCard = ({ price, title, products }) => {
  return (
    <article className="package">
      <h4>{title}</h4>

      <h5>${price}</h5>
      <ul>
        {products.map(product => {
          return (
            <li>
              <p>{product}</p>
            </li>
          )
        })}
      </ul>
    </article>
  )
}

export default PackageCard
