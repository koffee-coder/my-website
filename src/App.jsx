import { useCallback } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ProfileCard from "./components/ProfileCard/ProfileCard.jsx";

import Work from "./pages/Work";
import Bio from "./pages/Bio";
import Contact from "./pages/Contact";

import "./App.css";

// Import profile picture
import pratyoshPic from "./assets/pratyosh_desaraju.png";

function Home() {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "80vh" }}>
      <ProfileCard
        avatarUrl={pratyoshPic}
        miniAvatarUrl={pratyoshPic}
        name="Pratyosh"
        title="Senior Software Engineer"
        status="Online"
        showUserInfo={true}
      />
    </div>
  );
}

function App() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Router>
      <div
        className="particles-container"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
        }}
      >
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            background: { color: { value: "transparent" } },
            fpsLimit: 60,
            interactivity: {
              events: {
                onHover: { enable: true, mode: "repulse" },
                onClick: { enable: true, mode: "push" },
                resize: true,
              },
              modes: {
                repulse: { distance: 80, duration: 0.4 },
                push: { quantity: 2 },
              },
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
                  sync: false,
                },
              },
              move: {
                enable: true,
                speed: 0.5,
                direction: "none",
                random: false,
                straight: false,
                outModes: { default: "out" },
              },
            },
            detectRetina: true,
          }}
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      <Header />

      <main
        style={{
          position: "relative",
          zIndex: 5,
          paddingTop: "120px",
          minHeight: "100vh",
          background: "none",
          color: "#fff",
          boxSizing: "border-box",
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/bio" element={<Bio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
}

export default App;
