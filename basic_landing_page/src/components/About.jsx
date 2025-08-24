import React from "react";
import "../styles/About.css";

const About = () => {
  return (
    <section className="about-creative">
      <div className="about-video">
        <video src="/assets/hero_video1.mp4" autoPlay muted loop />
      </div>
      <div className="about-overlay">
        <div className="about-text">
          <h2>Our Vision</h2>
          <p>
            We break the boundaries of design and code to deliver bold, artistic, and scalable digital products.
          </p>
          <p>
            Powered by creativity, driven by technology — we craft tomorrow’s solutions, today.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
