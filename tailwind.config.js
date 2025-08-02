/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", // or your paths
    "./src/**/*.{js,ts,jsx,tsx,html}",
  ],
  theme: {
    extend: {
      colors: {
        brand1: '#059669',
        brand2: '#34D399',
      },
    },
  },
  plugins: [],
};
