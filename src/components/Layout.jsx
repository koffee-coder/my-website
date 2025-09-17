import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import PillNav from './PillNav';
import Footer from './Footer';
import './Layout.css';
import logo from '../assets/logo.png'; 

const Layout = () => {
  const location = useLocation();
  
  const navItems = [
    { label: 'Bio', href: '/bio' },
    { label: 'Work', href: '/work' }
  ];

  return (
    <div className="layout">
      <header className="header">
        <PillNav
          logo={logo}
          logoAlt="Pratyosh Desaraju"
          items={navItems}
          activeHref={location.pathname}
          className="center-nav"
          baseColor="#000000"
          pillColor="#ffffff"
          hoveredPillTextColor="#ffffff"
          pillTextColor="#000000"
        />
      </header>
      
      <main className="main-content">
        <Outlet />
      </main>
      
      <Footer />
    </div>
  );
};

export default Layout;
