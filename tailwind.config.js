/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
    },
    colors: {
      // Defines primary, primary-light, primary-dark
      primary: {
        light: "rgb(var(--color-primary-light) / <alpha-value>)",
        DEFAULT: "rgb(var(--color-primary) / <alpha-value>)",
        dark: "rgb(var(--color-primary-dark) / <alpha-value>)",
      },
      // Defines secondary-light and secondary-dark
      secondary: {
        light: "rgb(var(--color-secondary-light) / <alpha-value>)",
        dark: "rgb(var(--color-secondary-dark) / <alpha-value>)",
      },
      white: "#FFFFFF",
      black: "#000000",
    },
    keyframes: {
      halfFadeout: {
        '0%': { opacity: 1 },
        '90%': {opacity: 1 },
        '100%': {opacity: .5}
      },
      fadeIn: {
        '0%': {opacity: 0},
        '90': {opacity: 0},
        '100%': {opacity: 1}
      }
    },
    animation: {
      'fadeout-half': 'halfFadeout 2s linear',
      'fadein': 'fadeIn 2s linear'
    },
    extend: {},
  },
  plugins: [],
};
