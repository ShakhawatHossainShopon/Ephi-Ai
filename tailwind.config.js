const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.js",
  ],
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        primary: "#FF5A5F", // Custom blue color
        secondary: "#262F3A", // Custom green color
      },
    },
  },
  plugins: [require("daisyui")],
};
