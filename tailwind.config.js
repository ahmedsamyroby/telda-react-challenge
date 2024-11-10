/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1B1B1E",
        secondary: "#2A2A2D",
        accent: "#D1A054",
        "primary-typography": "#FFFFFF",
        "secondary-typography": "#A1A1A6",
      },
    },
  },
  plugins: [],
};
