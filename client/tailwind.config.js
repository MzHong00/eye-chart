/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {
      spacing: {
        '112': "28rem",
        '128': '32rem',
        '144': '36rem',
        '152': '38rem',
        '160': "40rem",
      }
    },
  },
  plugins: [],
}

