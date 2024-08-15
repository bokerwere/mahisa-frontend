/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/features/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true
    },
    colors:{
      primary: '#53669E',
      primaryLight: 'rgba(83,102,158,0.1)',
      secondary: 'rgb(231,62,67)',
      secondaryLight: 'rgba(231,62,67,0.1)',
      white: "#FFFFFF",
      lightGray: "#F4F5FE"
    },
    extend: {
      fontFamily:{
        Caladea: ['Caladea', 'serif'],
        Montserrat: ['Montserrat', 'sans-serif']
      },
    },
  },
  plugins: [],
}
