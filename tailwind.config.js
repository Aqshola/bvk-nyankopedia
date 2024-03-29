/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'pixel':[ 'VT323','monospace']
      },
      colors:{
        pink:{
          primary:"#FD98FD"
        },
        blue:{
          primary:"#003366"
        },
        yellow:{
          primary:"#FFFF00"
        }

      }
    },
  },
  plugins: [],
}