/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#e8ecf4",
          100: "#c5ceE4",
          200: "#8fa2c9",
          300: "#5975ad",
          400: "#2e5197",
          500: "#0a3280",
          600: "#082a6b",
          700: "#071f52",
          800: "#051638",
          900: "#0a1f44",
        },
        gold: {
          50: "#fdf3dc",
          100: "#fae7b9",
          200: "#f5d073",
          300: "#edb82e",
          400: "#c8992a",
          500: "#a67d20",
          600: "#856218",
          700: "#644811",
          800: "#432f0a",
          900: "#221703",
        },
      },
      fontFamily: {
        display: ["'Playfair Display'", "serif"],
        body: ["'DM Sans'", "sans-serif"],
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #c8992a 0%, #e8b84b 50%, #c8992a 100%)",
        "navy-gradient": "linear-gradient(135deg, #0a1f44 0%, #122552 100%)",
      },
    },
  },
  plugins: [],
};
