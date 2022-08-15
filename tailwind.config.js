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
        blue: "#2E424D",
        lightBlue: "#51C4D3",
        orange: "#FDD037"
      },
    },
  },
  plugins: [],
};
