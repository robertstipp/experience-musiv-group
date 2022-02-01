import React, { useState } from "react"
import { Link } from "gatsby"
import {
  FiChevronsDown,
  FiInstagram,
  FiFacebook,
  FiTwitter,
  FiYoutube,
} from "react-icons/fi"
import logo from "../assets/images/logo.svg"

const Navbar = () => {
  const [show, setShow] = useState(false)
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="experience music group" />
          </Link>
          <button
            className="nav-btn"
            onClick={() => {
              setShow(!show)
            }}
          >
            <FiChevronsDown />
          </button>
        </div>
        <div className={show ? "nav-links show-links" : "nav-links"}>
          <Link to="/" className="nav-link" activeClassName="active-link">
            home
          </Link>
          <Link
            to="/artists"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => {
              setShow(false)
            }}
          >
            artists
          </Link>
          <Link
            to="/news"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => {
              setShow(false)
            }}
          >
            news
          </Link>
          <Link
            to="/packages"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => {
              setShow(false)
            }}
          >
            packages
          </Link>
          <Link
            to="/about"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => {
              setShow(false)
            }}
          >
            about
          </Link>
          <Link
            to="/contact"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => {
              setShow(false)
            }}
          >
            contact
          </Link>
        </div>
        <div className="social-icons">
          <a href="">
            <FiInstagram size={20} />
          </a>
          <a href="">
            <FiFacebook size={20} />
          </a>
          <a href="">
            <FiTwitter size={20} />
          </a>
          <a href="">
            <FiYoutube size={20} />
          </a>
        </div>
      </div>
    </nav>
  )
}
export default Navbar
