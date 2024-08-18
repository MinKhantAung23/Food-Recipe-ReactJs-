/** @type {import('tailwindcss').Config} */
// const flowbite = require("flowbite-react/tailwind");
import flowbite from 'flowbite-react/tailwind'
export default {
  content: [
    './index.html',
    "./src/**/*.{js,jsx,ts,tsx}",

    'node_modules/preline/dist/*.js',
    flowbite.content(),
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
    // require('preline/plugin'),
    flowbite.plugin(),
  ],
}

