/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors :{
        primary: '#1C0C24',
        secondary: '#FF6900',
      },
      screens: {
        '13.3' : {'min':'1000px', 'max':'1300px'}
      },
      height: {
        '200': '200px',
      },
    },
  },
  plugins: [],
}