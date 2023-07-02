/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "bandPrimary": '#5110E5',
        "bandSecondary": '#210062',
        "bandTernary": "#009FBD",
        "bandFont": "#F9E2AF"
        // ...
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      'light',
      'dark',
      'cupcake'
    ],
  },
}

