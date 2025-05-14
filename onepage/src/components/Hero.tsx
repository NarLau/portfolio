

import "../styles/NighSky.css";

export const Hero = () => {
  const handleScroll = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };


  return (

  <div className="hero">
    <div className="stars"></div>
    <div className="twinkling"></div>
    <div className="clouds"></div>
    <div className="title">
      <h1>A Fullstack Developer Intern</h1>
      <button className="heroBTN" onClick={handleScroll}>Learn more...</button> 
    </div>
  </div>
);
};