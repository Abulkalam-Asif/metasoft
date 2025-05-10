import React, { useState, useEffect } from "react";
import { ThemeContext } from "./ThemeContext";

export const ThemeProvider = ({ children }) => {
  // Initialize theme from localStorage or system preference
  const getInitialMode = () => {
    const stored = localStorage.getItem("theme-preference");
    if (stored) {
      return stored === "dark";
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  };

  const [isDarkMode, setIsDarkMode] = useState(getInitialMode);

  const applyTheme = (isDark) => {
    document.documentElement.setAttribute("data-theme", isDark ? "dark" : "light");
    document.documentElement.classList.toggle("dark", isDark);
    document.documentElement.classList.toggle("light", !isDark);
  };

  useEffect(() => {
    applyTheme(isDarkMode);
    // Persist preference
    localStorage.setItem("theme-preference", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
