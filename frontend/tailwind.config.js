/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        crimson: '#DC143C',
        sienna: '#a0522d',
      },
      keyframes: {
        modalOpen: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        modalOpen: 'modalOpen 0.3s ease-out forwards',
      },
    },
  },
  plugins: [],
}
