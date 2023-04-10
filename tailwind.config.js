/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html"],
  theme: {
    extend: {
      container: {
        center: true,
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}