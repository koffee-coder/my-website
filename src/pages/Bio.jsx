import React, { useState } from 'react';
import moveUSAImg from '../assets/move_usa.png';
import mastersImg from '../assets/masters.png';
import engineerImg from '../assets/engineer.png';

const steps = [
  {
    id: 1,
    year: '2013',
    text: 'Moved to USA in 2013',
    image: moveUSAImg,
    description: 'I made the bold decision to move to the United States to pursue higher education and career opportunities. This was a transformative moment that opened doors to new experiences and challenges. Adapting to a new culture and environment helped me grow both personally and professionally. It marked the beginning of an exciting journey in the tech industry.',
  },
  {
    id: 2,
    year: '2015',
    text: 'Completed Masters in CS',
    image: mastersImg,
    description: 'I earned my Master\'s degree in Computer Science, deepening my knowledge in software engineering and algorithms. The rigorous coursework and research projects enhanced my technical skills significantly. I collaborated with talented peers and professors on cutting-edge projects. This achievement laid a strong foundation for my career in technology.',
  },
  {
    id: 3,
    year: '2015',
    text: 'Started working as an Engineer',
    image: engineerImg,
    description: 'I began my professional career as a software engineer, applying my academic knowledge to real-world problems. Working on diverse projects helped me understand the industry\'s best practices and workflows. I developed solutions that impacted users and contributed to business goals. This role marked the start of my journey as a senior software engineer.',
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
            style={stepContainerStyle}
            onMouseEnter={() => setHoveredStep(step.id)}
            onMouseLeave={() => setHoveredStep(null)}
          >
            {/* Year on the left side of the line */}
            <div style={yearStyle}>{step.year}</div>
            
            <div style={stepStyle}>
              <img src={step.image} alt="" style={imageStyle} />
              <div style={textWrapperStyle}>
                <div style={circleStyle(hoveredStep === step.id)} />
                <p style={textStyle}>{step.text}</p>
              </div>
            </div>
            
            {/* Hover Description */}
            {hoveredStep === step.id && (
              <div style={descriptionStyle}>
                <p style={descriptionTextStyle}>{step.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

const containerStyle = {
  width: '100vw',
  height: '100vh',
  padding: '80px 10vw 140px 10vw',
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
  position: 'relative',
  paddingLeft: '30px',
  borderLeft: '3px solid #888',
  marginTop: '40px',
  height: '400px',
  marginLeft: '80px',  // Space for years on the left
};

const stepContainerStyle = {
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
};

const yearStyle = {
  position: 'absolute',
  left: '-110px',  // Position to the left of the vertical line
  color: '#00aaff',
  fontSize: '1.2rem',
  fontWeight: 'bold',
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

const descriptionStyle = {
  position: 'absolute',
  left: '550px',
  top: '50%',
  transform: 'translateY(-50%)',
  backgroundColor: 'rgba(0, 170, 255, 0.1)',
  border: '1px solid rgba(0, 170, 255, 0.3)',
  borderRadius: '8px',
  padding: '15px 20px',
  maxWidth: '400px',
  zIndex: 10,
  animation: 'fadeIn 0.3s ease',
};

const descriptionTextStyle = {
  color: '#fff',
  fontSize: '0.85rem',
  lineHeight: '1.5',
  margin: 0,
};
