// Bio.jsx - Clean: No title, no empty box, just timeline
import React, { useState } from "react";
import moveUSAImg from "../assets/move_usa.png";
import mastersImg from "../assets/masters.png";
import engineerImg from "../assets/engineer.png";

const Bio = ({ theme = "dark" }) => {
  const isDark = theme === "dark";
  
  const steps = [
    {
      id: 1,
      year: "2013",
      text: "Moved to USA in 2013",
      image: moveUSAImg,
      description: "Moved to USA in 2013 to pursue higher education and career opportunities",
    },
    {
      id: 2,
      year: "2015",
      text: "Completed Masters in Computer Science",
      image: mastersImg,
      description: "Master's degree from a top university with focus on AI and Data Science",
    },
    {
      id: 3,
      year: "2015",
      text: "Started working as an Engineer",
      image: engineerImg,
      description: "Began professional career building scalable web applications and ML systems",
    },
  ];

  const [hoveredStep, setHoveredStep] = useState(null);

  const timelineBorderColor = isDark ? "#ffffff" : "#333";
  const timelineTextColor = isDark ? "#bbb" : "#666";
  const yearColor = "#FDB515";
  const circleInactiveColor = isDark ? "#555" : "#ccc";
  const descBgColor = isDark 
    ? "rgba(253, 181, 21, 0.1)" 
    : "rgba(253, 181, 21, 0.05)";
  const descBorderColor = isDark 
    ? "rgba(253, 181, 21, 0.3)" 
    : "rgba(253, 181, 21, 0.2)";
  const descTextColor = isDark ? "#fff" : "#1a1a1a";

  return (
    <div 
      style={{
        padding: "2rem 8vw 140px",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        color: isDark ? "#ffffff" : "#000000",
        background: "transparent",
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      {/* Timeline - Original styling preserved */}
      <section style={containerStyle(isDark)} aria-label="A quick bio">
        <h2 style={headingStyle(isDark)}>Quick Bio</h2>
        <div style={timelineStyle(timelineBorderColor)}>
          {steps.map((step) => (
            <div
              key={step.id}
              style={stepContainerStyle}
              onMouseEnter={() => setHoveredStep(step.id)}
              onMouseLeave={() => setHoveredStep(null)}
            >
              {/* Year on the left side of the line */}
              <div style={yearStyle(yearColor)}>{step.year}</div>
              
              <div style={stepStyle(timelineTextColor)}>
                <img src={step.image} alt="" style={imageStyle} />
                <div style={textWrapperStyle}>
                  <div style={circleStyle(hoveredStep === step.id, circleInactiveColor)} />
                  <p style={textStyle(timelineTextColor)}>{step.text}</p>
                </div>
              </div>
              
              {/* Hover Description */}
              {hoveredStep === step.id && (
                <div style={descriptionStyle(descBgColor, descBorderColor)}>
                  <p style={descriptionTextStyle(descTextColor)}>{step.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

// Theme-aware styles + original styling preserved
const containerStyle = (isDark) => ({
  width: "100%",
  maxWidth: "1200px",
  padding: "0 2rem",
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
});

const headingStyle = (isDark) => ({
  marginBottom: "0px",
  fontSize: "1.8rem",
  color: isDark ? "#ffffff" : "#1a1a1a",
  textAlign: "center",
});

const timelineStyle = (borderColor) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  position: "relative",
  paddingLeft: "30px",
  borderLeft: `3px solid ${borderColor}`,
  marginTop: "40px",
  height: "400px",
  marginLeft: "80px",
  maxWidth: "1000px",
});

const stepContainerStyle = {
  position: "relative",
  display: "flex",
  alignItems: "center",
};

const yearStyle = (color) => ({
  position: "absolute",
  left: "-110px",
  color,
  fontSize: "1.2rem",
  fontWeight: "bold",
});

const stepStyle = (textColor) => ({
  display: "flex",
  alignItems: "center",
  gap: "25px",
  color: textColor,
  cursor: "pointer",
  transition: "all 0.3s ease",
});

const textWrapperStyle = {
  display: "flex",
  alignItems: "center",
  gap: "15px",
};

const circleStyle = (isActive, inactiveColor) => ({
  width: "20px",
  height: "20px",
  borderRadius: "50%",
  backgroundColor: isActive ? "#FDB515" : inactiveColor,
  border: isActive ? "3px solid #FDB515" : `3px solid ${inactiveColor}`,
  flexShrink: 0,
  transition: "all 0.3s ease",
});

const imageStyle = {
  width: "80px",
  height: "80px",
  objectFit: "contain",
  borderRadius: "8px",
};

const textStyle = (color) => ({
  fontSize: "1rem",
  color,
  margin: 0,
});

const descriptionStyle = (bgColor, borderColor) => ({
  position: "absolute",
  left: "550px",
  top: "50%",
  transform: "translateY(-50%)",
  backgroundColor: bgColor,
  border: `1px solid ${borderColor}`,
  borderRadius: "8px",
  padding: "15px 20px",
  maxWidth: "400px",
  zIndex: 10,
  animation: "fadeIn 0.3s ease",
  boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
  backdropFilter: "blur(10px)",
});

const descriptionTextStyle = (color) => ({
  color,
  fontSize: "0.85rem",
  lineHeight: "1.5",
  margin: 0,
});

export default Bio;
