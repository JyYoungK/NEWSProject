/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 3s linear infinite",
      },
      fontFamily: {
        oldEnglish: ["Old English Five", "regular"],
        anglican: ["AnglicanText", "regular"],
      },

      keyframes: {
        shine: {
          "100%": { left: "125%" },
        },
      },
    },
  },

  plugins: [require("@tailwindcss/line-clamp")],
};
