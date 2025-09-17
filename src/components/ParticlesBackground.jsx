// src/components/ParticlesBackground.jsx
import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import './ParticlesBackground.css';

const ParticlesBackground = () => {
  const particlesInit = async engine => {
    // load the full tsparticles bundle
    await loadFull(engine);
  };

  return (
    <Particles
      init={particlesInit}
      options={{
        fullScreen: {
          enable: true,
          zIndex: -1   // behind everything
        },
        particles: {
          number: { value: 100 },
          color: { value: '#ffffff30' },
          shape: { type: 'circle' },
          size: { value: 2 },
          move: { enable: true, speed: 0.5 }
        }
      }}
    />
  );
};

export default ParticlesBackground;
