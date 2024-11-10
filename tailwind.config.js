/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#202127",
        secondary: "#161618",
        accent: "#F56565",
        "primary-typography": "#FFFFFF",
        "secondary-typography": "#A1A1A6",
      },
    },
  },
  plugins: [],
};
