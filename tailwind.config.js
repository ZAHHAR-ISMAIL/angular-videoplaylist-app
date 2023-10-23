/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        white: "#ffffff",
        black: "#000000",
        graybg: "#EFEFEF",
        navbar: "#12123D",
        border: "#CCCCCC",
        object: "#12123D",
        caption: "#8D8D8D",
        title: "#171717",
        check: "#353392",
        body: "#414141",
      },
    },
  },
  plugins: [],
};
