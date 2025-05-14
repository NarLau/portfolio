import { useState } from "react"
import "../styles/Nav.css"


export const Nav = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };


  return (
    <nav className="main-nav">
      <div className="navHeader">
          <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
            ☰
          </button>
          <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li><a href="#hero">To the stars</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
          </ul>     
      </div>
  </nav>
  )
};