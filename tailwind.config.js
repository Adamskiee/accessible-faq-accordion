import fluid, {extract, screens, fontSize} from "fluid-tailwind";

/** @type {import('tailwindcss').Config} */
export default {
  content: {
    files: ["./*.html",
     "./src/js/**/*.js",
     "./src/css/**/*.css"
    ],
    extract,
  },
  theme: {
    fontSize,
    extend: {
      screens: {
        ...screens,
        "mobile": "23.4375rem",
        "desktop":"90rem",
        "lg-mobile-desktop":{"min":"376px"}
      },
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
  plugins: [
    fluid(),
  ],
}

