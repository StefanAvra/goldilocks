module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        logo: "#FF665A",
        buttonGreen: "#81C784",
        buttonGreenHover: "#609463",
        buttonRed: "#E57373",
        buttonRedHover: "#B35959",
        buttonGray: "#A3A1A8",
        buttonGrayHover: "#727175"
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
