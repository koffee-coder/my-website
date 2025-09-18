// src/components/Footer.jsx

import React from 'react';
import { FiLinkedin } from 'react-icons/fi';
import { FaMediumM } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import './Footer.css'; // Optional: for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-icons">
        <a
          href="http://linkedin.com/in/pratyosh"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FiLinkedin size={32} />
        </a>
        <a
          href="https://medium.com/@pratyosh.desaraju"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Medium"
        >
          <FaMediumM size={32} />
        </a>
        <button
          type="button"
          className="email-button"
          aria-label="Email"
          onClick={() => {
            /* No action for now */
          }}
        >
          <MdAlternateEmail size={32} />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
