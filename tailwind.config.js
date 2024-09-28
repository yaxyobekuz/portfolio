/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#39965F",
        secondary: "#ffffff",

        dark: {
          100: "#545454",
          200: "#313131",
          300: "#1B1B1B",
        },

        accent: {
          pink: "#FF507D",
          blue: "#5CB0FF",
          green: "#00C853",
        },
      },

      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },

      zIndex: {
        1: 1,
        2: 2,
        3: 3,
        4: 4,
        5: 5,
        6: 6,
        7: 7,
        8: 8,
        9: 9,
      },
    },

    screens: {
      xl: "1280px",
      lg: "1024px",
      md: "768px",
      sm: "640px",
      xs: "425px",
    }
  },
  plugins: [],
};
