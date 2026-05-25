/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Bebas Neue"', 'sans-serif'],
        body: ['"Crimson Text"', 'serif'],
      },
      colors: {
        dark: '#000000',
        blood: '#cc0000',
      }
    },
  },
  plugins: [],
}