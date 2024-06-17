/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    "./src/**/*.{js,jsx,ts,tsx}",

    'node_modules/preline/dist/*.js',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: "#FF9A00",
        secondary: "#FF9F66"
      }
    },
  },
  plugins: [
    require('preline/plugin'),
  ],
}

