/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Socialist Red Scale
        "vn-red": {
          50: "#fef2f2",
          100: "#fee2e2",
          200: "#fecaca",
          300: "#fca5a5",
          400: "#f87171",
          500: "#ef4444",
          600: "#d43731",
          700: "#b91c1c",
          800: "#991b1b",
          900: "#862921",
        },
        // Revolutionary Yellow Scale
        "vn-yellow": {
          50: "#fefce8",
          100: "#fef9c3",
          200: "#fef08a",
          300: "#fde047",
          400: "#facc15",
          500: "#f9f350",
          600: "#ca8a04",
          700: "#a16207",
          800: "#854d0e",
          900: "#713f12",
        },
        // Cream/Beige Scale
        cream: {
          50: "#fefdfb",
          100: "#fdf9f3",
          200: "#fdf2dd",
          300: "#fce7bc",
          400: "#fad89a",
          500: "#f8c979",
          600: "#e5a854",
          700: "#c88a3c",
          800: "#a36c2d",
          900: "#7d5322",
        },
        // Dark Red/Maroon Scale
        "dark-red": {
          50: "#fef2f2",
          100: "#fee2e2",
          200: "#fdc8c6",
          300: "#fba39f",
          400: "#f77066",
          500: "#ec4437",
          600: "#d92d20",
          700: "#b61f16",
          800: "#971f17",
          900: "#862921",
        },
      },
      fontFamily: {
        fraunces: ["Fraunces", "serif"],
      },
    },
  },
  plugins: [],
};
