import React from "react"

const Footer = () => {
  return (
    <div className="page-footer">
      <p>
        &copy; {new Date().getFullYear()} <span>just bobby</span>. Built with{" "}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </p>
    </div>
  )
}

export default Footer
