/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#8700F2",
        border:"#D2CAD9",
        textColor:"#47414B",
        dark:"#1C052E",
        background:"#FAFAFA",
        muted:"#928D96"
      },
      fontFamily:{
        aktiv:"aktiv"
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}