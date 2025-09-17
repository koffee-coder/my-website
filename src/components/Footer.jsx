import React from 'react';
import { FaLinkedin, FaMedium, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="social-icons">
            <a
              href="https://www.linkedin.com/in/pratyosh"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://medium.com/@pratyosh.desaraju"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FaMedium />
            </a>
            <a
              href="mailto:your-email@example.com"
              className="social-icon"
            >
              <FaEnvelope />
            </a>
          </div>
          <p className="footer-text">© 2025 Pratyosh</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
