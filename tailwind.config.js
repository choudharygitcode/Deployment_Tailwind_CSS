/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    screens: {
      xs: '414px',
      sm: '640px',
      md: '768px',
      ip: '900px',
      xp: '992px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        mainpimary: '#388da8',
        headercolor: '#f8f9fa',
      },
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'], // This should match the class you're using
      },
      boxShadow: {
        customshadow: '0 .5rem 1rem rgba(0, 0, 0, .15)', // Add your custom shadow here
      },
    },
  },
  plugins: [],
}

