/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
    flowbite.content(),
  ],
  prefix: "",
  theme: {
    colors: {
      primary: "#0A0046",
      primaryDark: "#050035",
      primaryLight: "#09005B",
      secondary: "#0DACFF",
      secondaryDark: "#10A4FF",
      secondaryLight: "#24BCFF",
      white: "#FFFFFF",
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontFamily: {
        alacrity: ["Alacrity Sans", "Roboto"],
      },
    },
  },
  plugins: [require("tailwindcss-animate"), flowbite.plugin()],
};