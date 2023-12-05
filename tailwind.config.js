/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Fira_Code', ...defaultTheme.fontFamily.sans]
    },
    extend: { 
      animation: {
        slide: "slide 8s linear infinite",
      },
      keyframes: {
        slide: {
          "0%": { transform: "translateX(100%)", opacity: 1 },
          "20%": { transform: "translateX(80)", opacity: 1 },
          "40%": { transform: "translateX(40)", opacity: 1 },
          "60%": { transform: "translateX(-40%)", opacity: 1 },
          "80%": { transform: "translateX(-80%)", opacity: 1 },
          "100%": { transform: "translateX(-100%)", opacity: 1 },
        },
      },
     },
  },
  plugins: [],
}