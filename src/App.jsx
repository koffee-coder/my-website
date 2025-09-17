// src/App.jsx
import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Bio from './pages/Bio';
import Work from './pages/Work';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Particles from './components/Particles';
import { ThemeContext } from './context/themeContext';
import './styles/app.css';

function App() {
  const { darkMode } = useContext(ThemeContext);

  const particleColors = darkMode
    ? ['#9f7aea', '#805ad5']
    : ['#667eea', '#764ba2'];

  return (
    <BrowserRouter>
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      >
        <Particles
          particleColors={particleColors}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          particleHoverFactor={1}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      <div className="App">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bio" element={<Bio />} />
            <Route path="/work" element={<Work />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
