// src/components/Header.jsx
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaMapPin } from 'react-icons/fa';
import { ThemeContext } from '../context/themeContext';
import logo from '../assets/logo.png';

const Header = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="header-left">
            <div className="header-logo-text">
              <img src={logo} alt="Logo" className="logo-img" />
              <div className="text-content">
                <h1 className="name">Pratyosh Desaraju</h1>
                <p className="title">Senior Software Engineer</p>
                <div className="location">
                  <FaMapPin className="location-icon" />
                  <span className="location-text">Leander, TX</span>
                </div>
              </div>
            </div>
          </Link>
          <nav className="header-nav">
            <ul className="nav-links">
              <li><Link to="/bio">Bio</Link></li>
              <li><Link to="/work">Work</Link></li>
              <li><Link to="/blog">Blog</Link></li>
            </ul>
          </nav>
          <button
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle dark mode"
            className="theme-toggle"
          >
            {darkMode ? '🌙 Dark' : '☀️ Light'}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
