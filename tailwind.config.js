/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bodyBg: "red",
        lightGray: "#D5D5D5",
        chartColor: "#36B7FF",
        navText: "pink",
      },
    },
  },
  plugins: [],
};
