module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      sans: ["'Montserrat'"],
      mono: ["'Inconsolata'"]
    }
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
