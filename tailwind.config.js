/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    colors:{
      "secondary":"#EED9BE",
      "primary":"#D9A98D",
      "ternery":"#C4B095",
      "dark":"#222121",
      "white":"#ffffff",

    },
    fontFamily:{
      'nunito':["Nunito","sans-serif"]
    },
    extend: {
      screens: {
        'esm': '300px',
      },
      
    },
  },
  plugins: [],
}