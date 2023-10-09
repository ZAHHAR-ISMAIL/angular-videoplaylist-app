/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        darkblue: "#12123D",
        graybg: "#EFEFEF",
        grayborder: "#CCCCCC",
        grayobject: "#12123D",
        graycaption: "#8D8D8D",
        graytitle: "#171717",
      },
    },
  },
  plugins: [],
};
