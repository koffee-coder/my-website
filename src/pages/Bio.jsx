import React, { useState } from 'react';
import moveUSAImg from '../assets/move_usa.png';
import mastersImg from '../assets/masters.png';
import engineerImg from '../assets/engineer.png';

const steps = [
  {
    id: 1,
    text: 'Moved to USA in 2013',
    image: moveUSAImg,
  },
  {
    id: 2,
    text: 'Completed Masters in CS',
    image: mastersImg,
  },
  {
    id: 3,
    text: 'Started working as an Engineer',
    image: engineerImg,
  },
];

export default function Bio() {
  const [hoveredStep, setHoveredStep] = useState(null);

  return (
    <section style={containerStyle} aria-label="Bio timeline">
      <h2 style={headingStyle}>Bio Timeline</h2>
      <div style={timelineStyle}>
        {steps.map((step) => (
          <div
            key={step.id}
            style={stepStyle}
            onMouseEnter={() => setHoveredStep(step.id)}
            onMouseLeave={() => setHoveredStep(null)}
          >
            <img src={step.image} alt="" style={imageStyle} />
            <div style={textWrapperStyle}>
              <div style={circleStyle(hoveredStep === step.id)} />
              <p style={textStyle}>{step.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const containerStyle = {
  width: '100vw',
  height: '100vh',
  padding: '10px 10vw 100px 10vw',  // Reduced top padding to move timeline higher
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
};

const headingStyle = {
  marginBottom: '0px',
  fontSize: '1.8rem',
};

const timelineStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-evenly',
  flex: 1,
  position: 'relative',
  paddingLeft: '30px',
  borderLeft: '3px solid #888',
  marginTop: '-10px',
};

const stepStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '25px',
  color: '#bbb',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
};

const textWrapperStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '15px',
};

const circleStyle = (isActive) => ({
  width: '20px',
  height: '20px',
  borderRadius: '50%',
  backgroundColor: isActive ? '#00aaff' : '#555',
  border: isActive ? '3px solid #00aaff' : '3px solid #555',
  flexShrink: 0,
  transition: 'all 0.3s ease',
});

const imageStyle = {
  width: '80px',
  height: '80px',
  objectFit: 'contain',
  borderRadius: '8px',
};

const textStyle = {
  fontSize: '1rem',
  color: '#bbb',
  margin: 0,
};
