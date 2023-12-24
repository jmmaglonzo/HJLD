/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        text: "#1b0d13",
        background: "#efe1dd ",
        primary: "#e21b70",
        secondary: "#d7a4ba",
        accent: "#f87d8a",
        light: "#EBEBEB",
        borderColor: "#d0779d",
        icon: "#e0af54",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    container: {
      center: true,
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
  },
  plugins: [],
};
