// Bio.jsx - Timeline and Map side by side
import React, { useState } from "react";
import USAMap from "react-usa-map";
import { FaHome } from "react-icons/fa";
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
    },
    {
      id: 2,
      year: "2015",
      text: "Completed Masters in Computer Science",
      image: mastersImg,
    },
    {
      id: 3,
      year: "2015",
      text: "Started working as an Engineer",
      image: engineerImg,
    },
    {
      id: 4,
      year: "2026",
      text: "Currently focused on all things AI",
      image: engineerImg,
    }
  ];

  const [hoveredStep, setHoveredStep] = useState(null);
  const [hoveredHome, setHoveredHome] = useState(false);

  const timelineBorderColor = isDark ? "#ffffff" : "#333";
  const timelineTextColor = isDark ? "#bbb" : "#666";
  const yearColor = "#FDB515";
  const circleInactiveColor = isDark ? "#555" : "#ccc";

  // Map customization
  const mapConfig = {
    TX: {
      fill: "#FDB515",
    },
    DC1: {
      fill: isDark ? "#333" : "#e0e0e0",
    },
    DC2: {
      fill: isDark ? "#333" : "#e0e0e0",
    }
  };

  const mapHandler = (event) => {
    console.log(event.target.dataset.name);
  };

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
      {/* Side-by-side container */}
      <div style={sideBySideContainerStyle}>
        {/* Timeline Section - LEFT */}
        <section style={timelineSectionStyle(isDark)} aria-label="A quick bio">
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
              </div>
            ))}
          </div>
        </section>

        {/* USA Map Section - RIGHT */}
        <section style={mapSectionStyle(isDark)} aria-label="Current Location">
          <h2 style={headingStyle(isDark)}>Where I Live</h2>
          <div style={mapContainerStyle}>
            <style>
              {`
                #DC2 {
                  fill: ${isDark ? "#333" : "#e0e0e0"} !important;
                  stroke: ${isDark ? "#333" : "#e0e0e0"} !important;
                }
                #DC1 {
                  fill: ${isDark ? "#333" : "#e0e0e0"} !important;
                }
              `}
            </style>
            <div style={{ position: "relative" }}>
              <USAMap 
                customize={mapConfig}
                onClick={mapHandler}
                defaultFill={isDark ? "#333" : "#e0e0e0"}
                width={500}
                height={320}
              />
              {/* Home Icon positioned at Austin, TX */}
              <div 
                style={homeIconContainerStyle}
                onMouseEnter={() => setHoveredHome(true)}
                onMouseLeave={() => setHoveredHome(false)}
              >
                <FaHome style={homeIconStyle(isDark)} />
                {hoveredHome && (
                  <div style={homeTooltipStyle(isDark)}>
                    Leander, TX
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

// New style for side-by-side container
const sideBySideContainerStyle = {
  width: "100%",
  maxWidth: "1400px",
  display: "flex",
  flexDirection: "row",
  gap: "40px",
  alignItems: "flex-start",
  justifyContent: "center",
  flexWrap: "wrap",
};

// Timeline section style
const timelineSectionStyle = (isDark) => ({
  flex: "1 1 600px",
  minWidth: "500px",
  display: "flex",
  flexDirection: "column",
});

// Map section style
const mapSectionStyle = (isDark) => ({
  flex: "1 1 500px",
  minWidth: "400px",
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
  maxWidth: "600px",
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

const mapContainerStyle = {
  width: "100%",
  maxWidth: "500px",
  margin: "40px auto 0",
  padding: "20px",
};

const homeIconContainerStyle = {
  position: "absolute",
  top: "245px",
  left: "225px",
  transform: "translate(-50%, -50%)",
  zIndex: 10,
  pointerEvents: "auto",
  cursor: "pointer",
};

const homeIconStyle = (isDark) => ({
  fontSize: "24px",
  color: "#FF0000",
  filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.5))",
});

const homeTooltipStyle = (isDark) => ({
  position: "absolute",
  top: "-35px",
  left: "50%",
  transform: "translateX(-50%)",
  backgroundColor: isDark ? "rgba(253, 181, 21, 0.95)" : "rgba(253, 181, 21, 0.9)",
  color: isDark ? "#000" : "#000",
  padding: "6px 12px",
  borderRadius: "6px",
  fontSize: "14px",
  fontWeight: "500",
  whiteSpace: "nowrap",
  boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
  pointerEvents: "none",
});

export default Bio;
