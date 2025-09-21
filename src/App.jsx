import Particles from 'react-tsparticles';

function App() {
  return (
    <Particles
      options={{
        background: { color: { value: "#000" } },
        particles: {
          number: { value: 40 },
          color: { value: "#ff0000" },
          size: { value: 10 }
        }
      }}
      style={{ position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", zIndex: 0 }}
    />
  );
}

export default App;
