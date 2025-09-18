// src/App.jsx

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Bio from './pages/Bio';
import Work from './pages/Work';
import ParticlesBackground from './components/ParticlesBackground';
import './App.css';

function App() {
  return (
    <Router>
      <ParticlesBackground />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bio" element={<Bio />} />
          <Route path="/work" element={<Work />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;