module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "time-puple": "#FF0F50",
        "event-dark": "#212E3E",
        "event-content": "#161921",
      },
    },
    fontFamily: {
      poppins: ["Poppins", '"Open Sans"'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
