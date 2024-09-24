/** @type {import('tailwindcss').Config} */
// tailwind.config.js

module.exports = {
  purge: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2D5DEC",
        background: "#F7CBCB",
      },
      fontFamily: {
        pblack: ["Poppins-Black", "sans-serif"],
        pblacki: ["Poppins-BlackItalic", "sans-serif"],
        pbold: ["Poppins-Bold", "sans-serif"],
        pboldi: ["Poppins-BoldItalic", "sans-serif"],
        pxbold: ["Poppins-ExtraBold", "sans-serif"],
        pxboldi: ["Poppins-ExtraBoldItalic", "sans-serif"],
        pregular: ["Poppins-Regular", "sans-serif"],
        psemibold: ["Poppins-SemiBold", "sans-serif"],
        plight: ["Poppins-Light", "sans-serif"],
        pthin: ["Poppins-Thin", "sans-serif"],
      },
    },
  },
  plugins: [],
};
