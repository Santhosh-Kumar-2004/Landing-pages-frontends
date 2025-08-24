import React from "react";
import "../styles/Navbar.css";
import ThemeToggle from "./ThemeToggle";
import CTAButton from "./CTA_btn";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo">TechBrand</div>
      <ul className="nav-links">
        <li className="nav-item">Home</li>
        <li className="nav-item">Features</li>
        <li className="nav-item">Pricing</li>
        <li className="nav-item">Contact</li>
        <ThemeToggle />
        <CTAButton />
      </ul>
    </nav>
  );
};

export default Navbar;
