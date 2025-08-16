/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html",
     "./src/js/**/*.js",
     "./src/css/**/*.css"
    ],
  theme: {
    extend: {
      fontFamily: {
        worksans: ["Work Sans", "sans-serif"]
      },
      colors: {
        "white": "var(--white)",
        "purple-100": "var(--purple-100)",
        "purple-600": "var(--purple-600)",
        "purple-700": "var(--purple-700)",
        "purple-950": "var(--purple-950)"
      }
    },
  },
  plugins: [],
}

