import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="navigation">
      <div className="container">
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/bio">Bio</Link></li>
          <li><Link to="/patents">Patents</Link></li>
          <li><Link to="/research">Research</Link></li>
          <li><Link to="/blog">Medium Posts</Link></li>
          <li><Link to="/books">Books</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
