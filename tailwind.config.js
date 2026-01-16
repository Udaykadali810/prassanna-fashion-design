/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          light: '#F4E4BC',
          DEFAULT: '#D4AF37',
          dark: '#B8860B',
        },
        charcoal: {
          light: '#36454F',
          DEFAULT: '#1B1B1B',
          dark: '#121212',
        }
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
