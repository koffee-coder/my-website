import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function Header() {
  return (
    <header style={headerStyle}>
      <Link to="/" style={logoLinkStyle} aria-label="Home">
        <img src={logo} alt="Logo" style={logoStyle} />
      </Link>
      <nav>
        <ul style={navListStyle}>
          <li style={navItemStyle}><Link to="/work" style={navLinkStyle}>Work</Link></li>
          <li style={navItemStyle}><Link to="/bio" style={navLinkStyle}>Bio</Link></li>
          <li style={navItemStyle}><Link to="/contact" style={navLinkStyle}>Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

const headerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '40px',
  padding: '15px 20px',
  position: 'fixed',
  width: '100%',
  top: 0,
  zIndex: 10,
  backgroundColor: 'transparent',
  color: '#fff',
};

const logoLinkStyle = {
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
  textDecoration: 'none',
};

const logoStyle = {
  width: '100px',
  height: '100px',
  objectFit: 'contain',
};

const navListStyle = {
  listStyle: 'none',
  display: 'flex',
  margin: 0,
  padding: 0,
  gap: '30px',
};

const navItemStyle = {};

const navLinkStyle = {
  color: 'white',
  textDecoration: 'none',
  fontWeight: '500',
  cursor: 'pointer',
  fontSize: '1.55rem', // Increased font size
};
