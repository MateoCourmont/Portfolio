/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./docs/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        desktop: ["WinFont"],
      },
      fontSize: {
        xxs: "8px",
        "2xs": "9.5px",
      },
    },
    plugins: [],
  },
};
