/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,png}",
  ],
  theme: {
    fontFamily: {
      sans: ['Fira_Code', ...defaultTheme.fontFamily.sans]
    },
    extend: { 
      colors: {
        'mountain-900': '#440D20',
        'mountain-800': '#430C1E',
        'mountain-700': '#53192B',
        'mountain-600': '#6C3138',
        'mountain-500': '#CD4A03',
        'mountain-400': '#ED510C',
        'mountain-300': '#FB6934',
        'mountain-200': '#FB7E59',
        'mountain-100': '#FCD0AB',
        'pinklight': '#FA3A75',
        'bluelagoon': '#61FAF3',
        'bluegreen': '#55FAAD',
        'mountain-pink': '#FA7E3C',
        'flashygreen': '#37FA4D',
      },
        backgroundimage:{
           'mountain-Style_4': "url('/img/moutainStyle_4_svg.svg')",
      },
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