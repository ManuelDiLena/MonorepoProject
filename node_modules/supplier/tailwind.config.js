/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
        'first': '#155E63',
        'second': '#76B39D',
        'third': '#EAE7E7',
        'text': '#FFFFFF'
    },
  },
  plugins: [],
}

