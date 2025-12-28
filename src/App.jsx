import React, { useCallback, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import Header from './components/Header';
import Footer from './components/Footer';
import ProfileCard from './components/ProfileCard/ProfileCard.jsx';
import BlurText from './components/BlurText.jsx';
import Work from './pages/Work';
import Bio from './pages/Bio';
import Contact from './pages/Contact';
import './App.css';
import './index.css';
import pratyoshPic from './assets/pratyosh_desaraju.png';

function Home({ theme }) {
  const isDark = theme === 'dark';
  const messageContentClass = isDark ? 'home-message-content dark' : 'home-message-content light';

  return (
    <div className="home-2column" style={{ paddingBottom: '120px' }}>
      <div className="home-message">
        <div className={messageContentClass}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <BlurText 
              text="Hi there," 
              delay={40} 
              stepDuration={0.18} 
              animateBy="words" 
              direction="top" 
              className="text-2xl mb-6" 
            />
            <span className="wave-emoji" style={{ fontSize: '2em', marginLeft: '0.4em' }}>👋</span>
          </div>
          <div className="text-2xl mb-6" style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ fontWeight: '400' }}>
              <BlurText text="I am" delay={40} stepDuration={0.18} animateBy="words" direction="top" />
            </span>
            <span style={{ color: '#FDB515', marginLeft: '0.5em', fontWeight: '600' }}>
              <BlurText text="Pratyosh Desaraju" delay={40} stepDuration={0.18} animateBy="words" direction="top" />
            </span>
          </div>
          <BlurText 
            text="I am a Senior Engineer at Liberty Mutual Insurance Group." 
            delay={40} 
            stepDuration={0.18} 
            animateBy="words" 
            direction="top" 
            className="text-2xl mb-6" 
          />
          <BlurText 
            text="Check out the work or bio to learn more about me." 
            delay={40} 
            stepDuration={0.18} 
            animateBy="words" 
            direction="top" 
            className="text-2xl mb-6" 
          />
          <BlurText 
            text="You can also connect with me on LinkedIn or read what I have been writing on Medium using the links below." 
            delay={40} 
            stepDuration={0.18} 
            animateBy="words" 
            direction="top" 
            className="text-2xl" 
          />
        </div>
      </div>
      <div className="home-profilecard">
        <ProfileCard
          avatarUrl={pratyoshPic}
          name="Pratyosh Desaraju"
          title="Senior Engineer"
          status="Online"
        />
      </div>
    </div>
  );
}

function App() {
  const [theme, setTheme] = useState('dark');

  // Load saved theme on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    document.body.setAttribute('data-theme', savedTheme);
  }, []);

  // Update body attribute when theme changes
  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme(prev => {
      const newTheme = prev === 'dark' ? 'light' : 'dark';
      
      // Update body attribute immediately
      document.body.setAttribute('data-theme', newTheme);
      
      // Save to localStorage
      localStorage.setItem('theme', newTheme);
      
      return newTheme;
    });
  }, []);

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const isDark = theme === 'dark';

  return (
    <Router>
      <div 
        className="particles-container" 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0
        }}
      >
        <Particles
          key={theme}
          id="tsparticles"
          init={particlesInit}
          options={{
            background: {
              color: {
                value: "transparent",
              },
            },
            fpsLimit: 60,
            particles: {
              number: {
                value: 150,
              },
              color: {
                value: isDark ? "#ffffff" : "#8B5CF6",
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 3 },
              },
              opacity: {
                value: { min: 0.4, max: 0.9 },
              },
              animation: {
                enable: true,
                speed: 1,
              },
              move: {
                enable: true,
                speed: 0.5,
              },
            },
            interactivity: {
              events: {
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                onClick: {
                  enable: true,
                  mode: "push",
                },
              },
              modes: {
                repulse: {
                  distance: 80,
                },
                push: {
                  quantity: 2,
                },
              },
            },
          }}
        />
      </div>
      
      <Header theme={theme} onToggleTheme={toggleTheme} />
      
      <main style={{
        position: 'relative',
        zIndex: 5,
        padding: '120px 0 140px',
        minHeight: '100vh',
        boxSizing: 'border-box'
      }}>
        <Routes>
          <Route path="/" element={<Home theme={theme} />} />
          <Route path="/work" element={<Work theme={theme} />} />
          <Route path="/bio" element={<Bio theme={theme} />} />
          <Route path="/contact" element={<Contact theme={theme} />} />
        </Routes>
      </main>
      
      <Footer theme={theme} onToggleTheme={toggleTheme} />
    </Router>
  );
}

export default App;
