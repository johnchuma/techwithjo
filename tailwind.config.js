/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#55DA62",
        border:"#CACACA",
        textColor:"#47414B",
        dark:"#141A15",
        background:"#FCF5EB",
        muted:"#928D96"
      },
      fontFamily:{
        helvetica:"helvetica"
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}