/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./menu.html",
    "./about.html",
    "./contact.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FFF8F0',
        dark: '#1C1917',
        orange: {
          DEFAULT: '#C2410C',
          hover: '#9A3412',
          light: '#FFEDD5'
        },
        gold: {
          DEFAULT: '#D4A017',
          light: '#FDE68A',
          dark: '#B45309'
        },
        secondary: '#57534E'
      },
      fontFamily: {
        heading: ['Playfair Display', 'Georgia', 'serif'],
        body: ['Poppins', 'system-ui', 'sans-serif']
      }
    },
  },
  plugins: [],
}
