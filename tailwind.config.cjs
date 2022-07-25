/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      screens: {
        '2xl': { 'max': '1535px' },
        'xl': { 'max': '1279px' },
        'lg': { 'max': '1023px' },
        'md': { 'max': '767px' },
        'sm': { 'max': '639px' },
        '2xl-min': { 'min': '1535px' },
        'xl-min': { 'min': '1279px' },
        'lg-min': { 'min': '1023px' },
        'md-min': { 'min': '767px' },
        'sm-min': { 'min': '639px' },
      }
    },
  },
  plugins: [],
}