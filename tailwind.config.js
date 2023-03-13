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
      fadeIn: {
        '0%': {opacity: 0},
        '60%': {opacity: 0},
        '100%': {opacity: 1}
      },
      fadeInSlowFadeOut: {
        '0%': {opacity: 0},
        '30%': {opacity: 1},
        '60%': {opacity: 1},
        '90%': {opacity: .5}
      },
      fadeInImm: {
        '0%': {opacity: 0},
        '100%': {opacity: 1}
      }
    },
    animation: {
      'fade-in': 'fadeIn 2s linear',
      'fade-in-slow-fade-out': 'fadeInSlowFadeOut 2s linear',
      'fade-in-imm': 'fadeInImm 0.1s linear'
    },
    extend: {},
  },
  plugins: [],
};
