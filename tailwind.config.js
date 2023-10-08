/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ], theme: {
    daisyui: {
      themes: ["wireframe"],
    },
    extend:
    {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },
    },
  },
  plugins:
    [
      require("@tailwindcss/typography"),
      require("daisyui")],
}

