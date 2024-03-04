/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
    colors: {
      purple: {
        1: "#310047",
        2: "#660094",
        3: "#9614d0",
        4: "#bb44f0",
        5: "#d16aff",
      },
    },
    },
  },
  plugins: [],
}