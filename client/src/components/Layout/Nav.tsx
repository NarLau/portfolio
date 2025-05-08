import { useState } from "react"
import { NavLink } from "react-router"
import "../../styles/Nav.css";


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
            <li><NavLink to={"/home"}>MS</NavLink></li>
            <li><NavLink to={"/about"}>About Me</NavLink></li>
          </ul>     
      </div>
  </nav>
  )
};