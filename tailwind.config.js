/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'institute-blue': '#7e77ff',
        'institute-bg': '#1e1e2d',
      },
    },
  },
  plugins: [],
}