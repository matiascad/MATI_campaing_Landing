/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        colors: {
          deepPurple: '#160b38',
          purple: {
            400: '#c084fc',
            300: '#d8b4fe',
            200: '#e9d5ff'
          },
          blue: {
            400: '#60a5fa'
          },
          orange: {
            400: '#fb923c'
          }
        },
        fontFamily: {
          sans: ['Montserrat', 'sans-serif'],
        },
      },
    },
    plugins: [],
  }