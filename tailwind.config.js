/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {
      minHeight: {
        280: 280
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  }
}
