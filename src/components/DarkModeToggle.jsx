import React from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useTheme } from '../contexts/themeContext.js';

const DarkModeToggle = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <div className="theme-toggle-container">
      <button 
        className="theme-toggle" 
        onClick={toggleDarkMode}
        aria-label="Toggle dark mode"
      >
        {isDarkMode ? <FaSun /> : <FaMoon />}
      </button>
    </div>
  );
};

export default DarkModeToggle;
