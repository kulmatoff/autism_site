/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "custom-white": "#FDEED3",
        "custom-blue": "#1A90C0",
        "custom-darkblue": "#0C4258",
        "custom-lightblue": "#8ECCD9",
        "custom-orange": "#F39977",
        "custom-darkorange": "#6E311A",
      },
    },
  },
  plugins: [],
}

