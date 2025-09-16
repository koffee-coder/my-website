import React from 'react';
import { FaLinkedin, FaMedium, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="social-icons">
            <a 
              href="https://linkedin.com/in/your-profile" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FaLinkedin />
            </a>
            <a 
              href="https://medium.com/@your-username" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FaMedium />
            </a>
            <Link to="/contact" className="social-icon">
              <FaEnvelope />
            </Link>
          </div>
          <p className="footer-text">© 2024 Your Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
