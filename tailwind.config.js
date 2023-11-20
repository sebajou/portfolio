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
    extend: { },
  },
  plugins: [],
}