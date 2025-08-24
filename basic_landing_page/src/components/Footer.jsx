import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section */}
        <div className="footer-left">
          <h2>TechNest</h2>
          <p className="slogan">Innovating your digital world.</p>
          <div className="social-icons">
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
            <FaLinkedinIn />
          </div>
        </div>

        {/* Middle Section */}
        <div className="footer-middle">
          <div className="links-column">
            <h4>Quick Links</h4>
            <ul>
              <li>Home</li>
              <li>Features</li>
              <li>Pricing</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="links-column">
            <h4>Support</h4>
            <ul>
              <li>Help Center</li>
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
              <li>FAQ</li>
            </ul>
          </div>
        </div>

        {/* Right Section */}
        <div className="footer-right">
          <h4>Stay Updated</h4>
          <input
            type="text"
            placeholder="Search something..."
            className="footer-search"
          />
          <p className="footer-note">Subscribe to get the latest updates and deals.</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 TechNest. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
