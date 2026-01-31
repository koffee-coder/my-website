// Header.jsx - Beautiful toggle switch!
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import logo from "../assets/logo.png";

const HOVERCOLOR = "#FDB515";

const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-left: 24px;
`;

const ToggleLabel = styled.span`
  font-size: 0.85rem;
  font-weight: 500;
  opacity: 0.9;
  white-space: nowrap;
`;

const ToggleTrack = styled.div`
  width: 44px;
  height: 24px;
  background: ${({ theme }) => (theme === "dark" ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.2)")};
  border-radius: 12px;
  position: relative;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid ${({ theme }) => (theme === "dark" ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)")};
  backdrop-filter: blur(10px);
`;

const ToggleThumb = styled.div`
  width: 20px;
  height: 20px;
  background: ${({ theme }) => (theme === "dark" ? "#ffffff" : "#1a1a1a")};
  border-radius: 50%;
  position: absolute;
  top: 2px;
  left: ${({ theme }) => (theme === "dark" ? "2px" : "22px")};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  border: 2px solid ${({ theme }) => (theme === "dark" ? "#FDB515" : "#8B5CF6")};
`;

const SunIcon = keyframes`
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(180deg); }
`;

const MoonIcon = keyframes`
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(-180deg); }
`;

const ThemeIcon = styled.span`
  font-size: 1rem;
  animation: ${({ theme }) => (theme === "dark" ? MoonIcon : SunIcon)} 2s infinite;
  display: inline-block;
`;

export default function Header({ theme = "dark", onToggleTheme }) {
  const [hovered, setHovered] = useState({
    work: false,
    bio: false,
    contact: false,
  });

  const isDark = theme === "dark";
  const DEFAULTCOLOR = isDark ? "#ffffff" : "#000000";

  const handleToggle = () => {
    onToggleTheme();
  };

  return (
    <header style={headerStyle(isDark)}>
      <Link to="/" style={logoLinkStyle} aria-label="Home">
        <img src={logo} alt="Logo" style={logoStyle} />
      </Link>

      <nav>
        <ul style={navListStyle}>
          <li style={navItemStyle}>
            <Link
              to="/work"
              style={{
                ...navLinkStyle,
                color: hovered.work ? HOVERCOLOR : DEFAULTCOLOR,
              }}
              onMouseEnter={() => setHovered((h) => ({ ...h, work: true }))}
              onMouseLeave={() => setHovered((h) => ({ ...h, work: false }))}
            >
              Work
            </Link>
          </li>
          <li style={navItemStyle}>
            <Link
              to="/bio"
              style={{
                ...navLinkStyle,
                color: hovered.bio ? HOVERCOLOR : DEFAULTCOLOR,
              }}
              onMouseEnter={() => setHovered((h) => ({ ...h, bio: true }))}
              onMouseLeave={() => setHovered((h) => ({ ...h, bio: false }))}
            >
              Bio
            </Link>
          </li>
          <li style={navItemStyle}>
            <Link
              to="/contact"
              style={{
                ...navLinkStyle,
                color: hovered.contact ? HOVERCOLOR : DEFAULTCOLOR,
              }}
              onMouseEnter={() => setHovered((h) => ({ ...h, contact: true }))}
              onMouseLeave={() => setHovered((h) => ({ ...h, contact: false }))}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      {/* ✅ BEAUTIFUL TOGGLE SWITCH */}
      {onToggleTheme && (
        <ToggleContainer>
          <ToggleLabel>{isDark ? "Dark" : "Light"}</ToggleLabel>
          <ToggleTrack 
            theme={theme} 
            onClick={handleToggle}
            title={`Switch to ${isDark ? "Light" : "Dark"} mode`}
          >
            <ToggleThumb theme={theme} />
          </ToggleTrack>
          <ThemeIcon theme={theme}>
            {isDark ? "🌙" : "☀️"}
          </ThemeIcon>
        </ToggleContainer>
      )}
    </header>
  );
}

// Styles
const headerStyle = (isDark) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "40px",
  padding: "15px 20px",
  position: "fixed",
  width: "100%",
  top: 0,
  zIndex: 50,
  backgroundColor: isDark 
    ? "rgba(26, 26, 26, 0.85)" 
    : "rgba(255, 255, 255, 0.85)",
  backdropFilter: "blur(10px)",
  color: isDark ? "#ffffff" : "#000000",
  borderBottom: `1px solid ${isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"}`,
});

const logoLinkStyle = {
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
  textDecoration: "none",
};

const logoStyle = {
  width: "100px",
  height: "100px",
  objectFit: "contain",
};

const navListStyle = {
  listStyle: "none",
  display: "flex",
  margin: 0,
  padding: 0,
  gap: "30px",
};

const navItemStyle = {};

const navLinkStyle = {
  textDecoration: "none",
  fontWeight: 500,
  cursor: "pointer",
  fontSize: "1.55rem",
  transition: "color 0.3s ease",
};
