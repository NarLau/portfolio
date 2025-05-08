import { useState } from "react";
import { useNavigate } from "react-router";
import "../../styles/NighSky.css";
import "../../styles/Hero.css";

export const Hero = () => {

 const [scrollUp, setScrollUp] = useState(false);
  const navigate = useNavigate();

  const handleLearnMore = () => {
    setScrollUp(true); 
    setTimeout(() => {
      navigate('/home'); 
    }, 1000);
  };

  return (

  <div className={`hero ${scrollUp ? 'scroll-up' : ''}`}>
    <div className="stars"></div>
    <div className="twinkling"></div>
    <div className="clouds"></div>
    <div className="title">
      <h1>A Fullstack Developer Intern</h1>
    </div>
    <button className="HeroBTN" onClick={handleLearnMore}>
      Learn more...
    </button>
  </div>
);
};