// src/components/Footer.jsx

import React from 'react';
import { TiSocialLinkedinCircular } from 'react-icons/ti';
import { AiFillMediumCircle } from 'react-icons/ai';
import { LuMessageCircleCode } from 'react-icons/lu';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer-icons">
      <a
        href="http://linkedin.com/in/pratyosh"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <TiSocialLinkedinCircular size={32} color="#ffffff" />
      </a>
      <a
        href="https://medium.com/@pratyosh.desaraju"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Medium"
      >
        <AiFillMediumCircle size={32} color="#ffffff" />
      </a>
      <button
        type="button"
        className="email-button"
        aria-label="Email"
        onClick={() => {}}
      >
        <LuMessageCircleCode size={32} color="#ffffff" />
      </button>
    </div>
  </footer>
);

export default Footer;
