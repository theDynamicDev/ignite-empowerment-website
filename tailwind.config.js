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
        cyanTheme: "#00FFFF",
        darkGrayTheme: "#A9A9A9",
        greenTheme: "#00A300",
        orangeTheme: "#F97806",
        logo: "#edebeb",
        bg1: "#4c05b0",
      },
      boxShadow: {
        "outline-blue":
          "0 2px 4px 0 rgba(0, 0, 0, 0.1), 0 0 0 3px rgba(0, 123, 255, 0.25)",
      },
    },

    variants: {
      extend: {
        boxShadow: ["focus"],
      },
    },
  },
  plugins: [require("@xpd/tailwind-3dtransforms")],
};
