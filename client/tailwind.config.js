/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkPrimary: '#15161a',
        darkSecondary: '#25272A',
        darkTertiary: '#45474A',
        darkTextPrimary: '#C3C6D1',
        pinkPrimary: '#FF5A5A',
      }
    },
  },
  plugins: [],
}