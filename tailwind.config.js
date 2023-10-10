/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        white: "#ffffff",
        navbar: "#12123D",
        graybg: "#EFEFEF",
        border: "#CCCCCC",
        object: "#12123D",
        caption: "#8D8D8D",
        title: "#171717",
      },
    },
  },
  plugins: [],
};
