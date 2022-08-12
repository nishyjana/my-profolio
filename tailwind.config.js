/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
    "./src/index.tsx",
  ],
  theme: {
    extend: {
      colors: {
        blue: "#132743",
        lightBlue: "#51C4D3",
        orange: "#FF5F00"
      },
    },
  },
  plugins: [],
};
