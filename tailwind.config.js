/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        dark: "#242526",
        primary:"#0d90f3"

      }
    },
  },
  plugins: [],
}
