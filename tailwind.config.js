/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "selector",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 1s ease-in-out",
        "ticker-left": "scroll 40s linear infinite",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        scroll: {
          to: { transform: "translateX(calc(-100% - 1.25rem))" },
        },
      },
    },
  },
};
