import { useEffect, useState } from "react";
import "../styles/Layout.css";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { About } from "../components/Sections/About";
import { LIA } from "../components/Sections/LIA";
import { Skills } from "../components/Sections/Skills";

export const Layout = () => {
  const [scrolledPastHero, setScrolledPastHero] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById("hero");
      if (!hero) return;

      const heroBottom = hero.getBoundingClientRect().bottom;
      setScrolledPastHero(heroBottom <= 20); 
    };

    const main = document.querySelector("main");
    if (main) {
      const sections = main.querySelectorAll("section");
      sections.forEach((section, index) => {
        section.classList.remove("odd", "even");
        section.classList.add(index % 2 === 0 ? "even" : "odd");
      });
    }
    window.addEventListener("scroll", handleScroll);
    handleScroll(); 
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
         <header className={`header ${scrolledPastHero ? "opaque" : "transparent"}`}>
         <Header />
    </header>
      <main>
        <div id="hero">
          <Hero />
        </div>    
        <section id="about">
          <About />
        </section>    
        <section id="skills">
          <Skills />
        </section>    
        <section id="lia">
          <LIA />
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};
