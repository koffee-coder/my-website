import React, { useState } from 'react';
import { TiSocialLinkedinCircular } from 'react-icons/ti';
import { AiFillMediumCircle } from 'react-icons/ai';
import { MdOutlineAlternateEmail } from 'react-icons/md';

export default function Footer() {
  const [showCopied, setShowCopied] = useState(false);

  const handleEmailCopy = () => {
    const email = 'your-email@example.com'; // Replace with your actual email
    navigator.clipboard.writeText(email);
    setShowCopied(true);
    setTimeout(() => setShowCopied(false), 2000); // Hide message after 2 seconds
  };

  return (
    <footer style={footerStyle}>
      <div style={iconsContainerStyle}>
        <a
          href="http://linkedin.com/in/pratyosh"
          target="_blank"
          rel="noopener noreferrer"
          style={iconLinkStyle}
          aria-label="LinkedIn Profile"
        >
          <TiSocialLinkedinCircular style={iconStyle} />
        </a>

        <a
          href="https://medium.com/@pratyoshdesaraju/"
          target="_blank"
          rel="noopener noreferrer"
          style={iconLinkStyle}
          aria-label="Medium Profile"
        >
          <AiFillMediumCircle style={iconStyle} />
        </a>

        <button
          onClick={handleEmailCopy}
          style={iconButtonStyle}
          aria-label="Copy Email"
        >
          <MdOutlineAlternateEmail style={iconStyle} />
        </button>
      </div>

      {showCopied && <div style={messageStyle}>Email address copied!</div>}
    </footer>
  );
}

const footerStyle = {
  position: 'fixed',
  bottom: 0,
  left: 0,
  width: '100%',
  padding: '20px 0',
  background: 'transparent', // Transparent to show particles
  zIndex: 10,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '10px',
};

const iconsContainerStyle = {
  display: 'flex',
  gap: '30px',
  alignItems: 'center',
};

const iconLinkStyle = {
  color: '#fff',
  textDecoration: 'none',
  transition: 'color 0.3s ease, transform 0.3s ease',
  cursor: 'pointer',
};

const iconButtonStyle = {
  background: 'none',
  border: 'none',
  color: '#fff',
  cursor: 'pointer',
  padding: 0,
  transition: 'color 0.3s ease, transform 0.3s ease',
};

const iconStyle = {
  fontSize: '2.5rem',
  transition: 'transform 0.3s ease, color 0.3s ease',
};

const messageStyle = {
  color: '#00aaff',
  fontSize: '0.9rem',
  fontWeight: 'bold',
  animation: 'fadeIn 0.3s ease',
};
