/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-purple': 'rgb(158, 120, 207)',
        'custom-dark': 'rgb(13, 7, 20)',
        'custom-green': 'rgb(200, 222, 200)',
      },
    },
  },
  variants: {},
  plugins: [],
};
