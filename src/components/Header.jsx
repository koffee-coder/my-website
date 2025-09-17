import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="header-left">
            <h1 className="name">Pratyosh Desaraju</h1>
            <p className="title">Senior Software Engineer</p>
          </Link>
          <nav className="header-nav">
            <ul className="nav-links">
              <li><Link to="/bio">Bio</Link></li>
              <li><Link to="/work">Work</Link></li>
              <li><Link to="/blog">Blog</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
