/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        dark: "#000000",
        primary: "#7f7f7f",
        secondary: "#e8e5e480",
      },
    },
  },
  plugins: [],
};
