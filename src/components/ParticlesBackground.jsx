// src/components/ParticlesBackground.jsx

import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import './ParticlesBackground.css';

const ParticlesBackground = () => {
  const particlesInit = async (engine) => {
    // Load the full tsparticles bundle
    await loadFull(engine);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: {
            value: '#000000'  // black background
          }
        },
        fpsLimit: 60,
        particles: {
          number: {
            value: 80,
            density: {
              enable: true,
              area: 800
            }
          },
          color: {
            value: '#800080'  // purple particles
          },
          links: {
            color: '#800080',
            enable: true,
            distance: 150,
            opacity: 0.4,
            width: 1
          },
          shape: {
            type: 'circle'
          },
          opacity: {
            value: 0.5
          },
          size: {
            value: { min: 3, max: 8 }  // increased particle size
          },
          move: {
            enable: true,
            speed: 2,
            outModes: {
              default: 'bounce'
            }
          }
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: 'repulse'
            },
            onClick: {
              enable: true,
              mode: 'push'
            }
          },
          modes: {
            repulse: {
              distance: 100
            },
            push: {
              quantity: 4
            }
          }
        },
        detectRetina: true
      }}
    />
  );
};

export default ParticlesBackground;
