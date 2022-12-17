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
      color: {
        theme_newsPaper: "#C8BFB8",
      },
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
      columnRuleStyle: [
        "none",
        "hidden",
        "dotted",
        "dashed",
        "solid",
        "double",
        "groove",
        "ridge",
        "inset",
        "outset",
      ],
    },
  },

  plugins: [require("@tailwindcss/line-clamp")],
};
