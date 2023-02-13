/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        name: ["Calligraffitti", "sans-serif"],
      },
      scale: {
        200: "2",
      },
      colors: {
        dark: "#001a00",
      },
      translate: {
        100: "100rem",
      },
    },
  },
  plugins: [],
};
