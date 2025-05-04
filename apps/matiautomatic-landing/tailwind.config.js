/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        colors: {
          darkBlue: '#031225',
          blue: {
            900: '#052444',
            800: '#0f4c8a',
            700: '#33a3bc',
            200: '#b3d5ff'
          },
          pink: {
            500: '#d946ef'
          },
          indigo: {
            900: '#312e81'
          }
        },
        fontFamily: {
          sans: ['Montserrat', 'sans-serif'],
        },
      },
    },
    plugins: [],
  }