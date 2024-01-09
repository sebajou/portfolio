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
        'orange900': '#440D20',
        'orange800': '#51192A',
        'orange700': '#6A303B',
        'orange600': '#ED7560',
        'orange500': '#CE4C01',
        'orange400': '#FC6731',
        'orange300': '#FC6935',
        'orange200': '#FC815A',
        'orange100': '#FDD0AC',
        'pinklight': '#FA3A75',
        'bluelagoon': '#61FAF3',
        'bluegreen': '#55FAAD',
        'orangepink': '#FA7E3C',
        'flashygreen': '#37FA4D',
      },
        backgroundimage:{
           'mountainStyle_4': "url('/img/moutainStyle_4_svg.svg')",
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