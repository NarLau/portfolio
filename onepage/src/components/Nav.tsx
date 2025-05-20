import { useState, useEffect } from "react";
import "../styles/Nav.css";

export const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "skills"]; 
      const scrollPos = window.scrollY + window.innerHeight / 2;
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const bottom = top + el.offsetHeight;
          if (scrollPos >= top && scrollPos < bottom) {
            setActiveSection(id);
            return;
          }
        }
      }
      setActiveSection("");
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); 
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="main-nav">
      <div className="navHeader">
        <button
          className="menu-toggle"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          ☰
        </button>
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li><a href="#">To the sky</a></li>
          <li>
            <a href="#about" className={activeSection === "about" ? "active" : ""}>About</a>
          </li>
          <li>
            <a href="#skills" className={activeSection === "skills" ? "active" : ""}>My Skills</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
