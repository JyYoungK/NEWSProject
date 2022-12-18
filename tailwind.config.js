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
      lineClamp: {
        8: "8",
        9: "9",
        10: "10",
        11: "11",
        22: "22",
        32: "32",
      },
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
