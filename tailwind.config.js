/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "blue-green": "#065143",
        mindaro: "#ddfcad",
        "yellow-green": "#c8e087",
        "moss-green": "#95a472",
        "persian-indigo": "#360568",
      },
      fontFamily: {
        'open-sans': ['Open Sans']
      }
    },
  },
  plugins: [],
  darkMode: "class",
};
