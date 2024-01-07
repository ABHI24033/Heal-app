/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],

  theme: {
    extend: {},
    colors: {
      primary: '#32856E',
      secondary: '#52CFAC',
      black: '#11111E',
      white:"#fff",
      white2:"#F9F4FE",
      gray:"#E9E9EB",
      transparent:'transparent',
      red:'red',
      white3:'#FDFCFD',
      black2:'#000000'
      

      // ...
    },
    screens: {
      'mobile': '430px',
      'tablet': '875px',
      'desktop': '1280px',
    },

  },
  plugins: [],
}

