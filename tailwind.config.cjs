/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,astro,jsx,js}"],
  theme: {
    extend: {
      colors: {        
        "gray-superlight": "#d8d5d5",
        "gray-light": "#9d9d9d",
        "gray": "#303030",
        "gray-dark": "#212121",
        "gray-superdark": "#19191c",
        "green": "#40d8bb",
      },
      backgroundColor: {
        "gray-light": "#c2c2c2",
        "gray": "#55545a",
        "gray-dark": "#2a2830",
        "gray-black": "#1d1b24",
        "gray-superblack": "#17151b",
        "green-light": "#53f6c7",
        "green": "#19d19d",
        "pink-dark": "#f21e4e",
      },
      fontFamily: {
        title: ["Rubik", "sans-serif"],
        text: ["Roboto", "sans-serif"]        
      },
      fontSize: {
        "icon": "70px",
      }
    },
  },
  plugins: [],
}