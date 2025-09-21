// src/components/Background.jsx
import React from 'react';
import Particles from 'react-tsparticles';

export default function Background() {
  const options = {
    background: {
      color: { value: "#0096FF " }
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onClick: { enable: true, mode: "push" },
        onHover: { enable: true, mode: "repulse" },
        resize: true
      },
      modes: {
        push: { quantity: 4 },
        repulse: { distance: 100, duration: 0.4 }
      }
    },
    particles: {
      color: { value: "#800080" }, // purple particles
      links: {
        color: "#800080",
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1
      },
      collisions: { enable: true },
      move: {
        direction: "none",
        enable: true,
        outModes: { default: "bounce" },
        random: false,
        speed: 2,
        straight: false
      },
      number: { density: { enable: true, area: 800 }, value: 80 },
      opacity: { value: 0.7 },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 5 } }
    },
    detectRetina: true
  };

  return <Particles id="tsparticles" options={options} style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }} />;
}
