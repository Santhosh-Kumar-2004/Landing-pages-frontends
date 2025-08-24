import React from 'react';
import '../styles/Hero.css';

const HeroSection = () => {
  return (
    <section className="hero1">
      <div className="overlay" />
      <div className="hero1-content">
        <h1 className="fade-in">Elevate Your Business with Us</h1>
        <p className="rise-in">
          Discover top-tier digital solutions for startups and enterprises.
        </p>
        <button className="cta-btn">Get Started</button>
      </div>
      <div className="floating-shapes">
        <span className="circle"></span>
        <span className="square"></span>
        <span className="triangle"></span>
      </div>
    </section>
  );
};

export default HeroSection;
