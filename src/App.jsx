// src/App.jsx
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import "./App.css";

function App() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <>
      <div className="particles-container">
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            background: { color: { value: "#000000" } },
            fpsLimit: 60,
            interactivity: {
              events: {
                onHover: { enable: true, mode: "repulse" },
                onClick: { enable: true, mode: "push" },
                resize: true
              },
              modes: {
                repulse: { distance: 80, duration: 0.4 },
                push: { quantity: 2 }
              }
            },
            particles: {
              number: { value: 150 },
              color: { value: "#ffffff" },
              shape: { type: "circle" },
              size: { value: { min: 1, max: 3 } },
              opacity: {
                value: { min: 0.3, max: 1 },
                animation: {
                  enable: true,
                  speed: 1,
                  minimumValue: 0.3,
                  sync: false
                }
              },
              move: {
                enable: true,
                speed: 0.5,
                direction: "none",
                random: false,
                straight: false,
                outModes: { default: "out" },
                orbit: {
                  enable: true,
                  radius: 200,
                  rotation: { value: 0, direction: "clockwise", animation: { enable: true, speed: 0.1 } }
                }
              }
            },
            detectRetina: true
          }}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      {/* Other app content */}
    </>
  );
}

export default App;
