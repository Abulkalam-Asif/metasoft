import React, { useEffect } from "react";
import styles from "./themeToggle.module.css";
import { useTheme } from "../../context/ThemeContext";

const ThemeToggle = ({ screen }) => {
  const { toggleTheme } = useTheme();
  const storageKey = "theme-preference";

  const getColorPreference = () => {
    if (localStorage.getItem(storageKey))
      return localStorage.getItem(storageKey);
    else
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
  };

  const theme = {
    value: getColorPreference(),
  };

  const reflectPreference = () => {
    document.firstElementChild.setAttribute("data-theme", theme.value);

    document
      .querySelector("#theme-toggle")
      ?.setAttribute("aria-label", theme.value);
  };

  const setPreference = () => {
    localStorage.setItem(storageKey, theme.value);
    reflectPreference();
  };

  const onClick = () => {
    // flip current value
    toggleTheme();
    theme.value = theme.value === "light" ? "dark" : "light";

    setPreference();
  };

  useEffect(() => {
    // set early so no page flashes / CSS is made aware
    reflectPreference();

    // set on load so screen readers can see latest value on the button
    const handleLoad = () => {
      reflectPreference();
    };

    window.addEventListener("load", handleLoad);

    // sync with system changes
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = ({ matches: isDark }) => {
      theme.value = isDark ? "dark" : "light";
      setPreference();
    };

    mediaQuery.addEventListener("change", handleChange);

    // Cleanup function to remove event listeners
    return () => {
      window.removeEventListener("load", handleLoad);
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  return (
    <button
      className={`${styles["theme-toggle"]} cursor-pointer border-2 rounded-full p-1.5`}
      id="theme-toggle"
      title="Toggles light & dark"
      aria-label="auto"
      aria-live="polite"
      onClick={onClick}>
      <svg
        className={styles["sun-and-moon"]}
        aria-hidden="true"
        width="24"
        height="24"
        viewBox="0 0 24 24">
        <mask className={styles.moon} id={`${screen}-moon-mask`}>
          <rect x="0" y="0" width="100%" height="100%" fill="white" />
          <circle cx="24" cy="10" r="6" fill="black" />
        </mask>
        <circle
          className={styles.sun}
          cx="12"
          cy="12"
          r="6"
          mask={`url(#${screen}-moon-mask)`}
          fill="currentColor"
        />
        <g className={styles["sun-beams"]} stroke="currentColor">
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </g>
      </svg>
    </button>
  );
};

export default ThemeToggle;
