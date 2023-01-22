/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js, jsx}"],
  theme: {
    extend: {
      colors: {
        muted: '#545454',
        'dark-muted': '#4A4A4A',
        'light-muted': '#9A9A9A'
      }
    },
  },
  plugins: [],
}
