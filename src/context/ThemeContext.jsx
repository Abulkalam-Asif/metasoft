import React, { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

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

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
    document.documentElement.classList.toggle("light", !isDarkMode);
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

export const useTheme = () => useContext(ThemeContext);
