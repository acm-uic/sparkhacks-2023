/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      primary: "rgb(var(--color-primary) / <alpha-value>)",
      primaryLight: "rgb(var(--color-primary-light) / <alpha-value>)",
      primaryDark: "rgb(var(--color-primary-dark) / <alpha-value>)",

      secondaryLight: "rgb(var(--color-secondary-light) / <alpha-value>)",
      secondaryDark: "rgb(var(--color-secondary-dark) / <alpha-value>)",
    },
    extend: {},
  },
  plugins: [],
};
