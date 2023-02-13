/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
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
      'white': '#FFFFFF',
    }, 
    extend: {},
  },
  plugins: [
    plugin(({addBase, theme}) => {
      addBase({
        // or whichever color you'd like
        'html': {color: theme('colors.white')},
      });
    })
  ],
};
