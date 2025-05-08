import { useState, useEffect } from "react";
import { Footer } from "../components/Layout/Footer";
import { Header } from "../components/Layout/Header";
import { Hero } from "../components/Layout/Hero";
import "../styles/Layout.css";
import { Outlet, useLocation } from "react-router";

export const Layout = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    if (!isHome) {
      setFadeIn(true);
    }
  }, [isHome]);

  if (isHome) {
    return <Hero />;
  }

  return (
    <div className={`layout-wrapper ${fadeIn ? 'fade-in' : ''} `}>
      <header><Header /></header>
      <main><Outlet /></main>
      <footer><Footer /></footer>
    </div>
  );
};
