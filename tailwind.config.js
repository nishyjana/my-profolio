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
      backgroundImage: {
        'hero': `url('https://scontent.fcmb11-1.fna.fbcdn.net/v/t39.30808-6/291333228_2943346645962949_4221671178690896799_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=kLd4i0viajQAX8-ON-Y&_nc_ht=scontent.fcmb11-1.fna&oh=00_AT_5gF0ZkC5RfsQpyn9EM3M5sGxb3vetPVI5TWEVYPNHzQ&oe=62FCB98A')`,
      },
    },
  },
  plugins: [],
};
