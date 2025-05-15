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
          <li><a href="#">To the sky</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">My Skills</a></li>
          </ul>     
      </div>
  </nav>
  )
};