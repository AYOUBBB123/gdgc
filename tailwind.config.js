/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1090CB",
        secondary: "#5C5C5C",
        third:"#1090CB1A",
      },
    },
  },
  plugins: [],
};
