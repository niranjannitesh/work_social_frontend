/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
    colors: {
      transparent: "transparent",
      "transparent-25": "rgba(89, 116, 150, 0.25)",

      black: "#403D3E",
      white: "#FFF",

      gb: "#F9F9F9",

      grey: {
        100: "#3F3356",
        75: "#BEB5C6",
        25: "#ECEBED",
        20: "#F3F3F3",
        10: "#F7F5F9"
      },

      red: {
        100: "#FF647C",
        75: "#FDAFBB",
        25: "#FBE4E8"
      },

      green: {
        100: "#00C48C",
        75: "#7DDFC3",
        25: "#D5F2EA"
      },

      blue: {
        100: "#2482fe",
        75: "#A5AFFB",
        25: "#E5E7FA",
        10: "#d9e7fd",
        5: "#f3f8ff"
      }
    },
    fontFamily: {
      sans: ["IBM Plex Sans", "sans-serif"]
    },
    boxShadow: {
      default: "0px 7px 64px rgba(0, 0, 0, 0.07)",
      outline: "0 0 0 3px rgba(107, 129, 248, 0.15)",
      check: "0px 7px 20px rgba(0, 0, 0, 0.07)",
      tabs: "inset 0px -1px 0px rgba(208, 201, 214, 0.4)"
    },
    borderRadius: {
      none: "0",
      default: "0.375rem",
      md: "0.5rem",
      lg: "1rem",
      full: "9999px"
    }
  },
  variants: {
    borderColor: ["responsive", "hover", "focus", "focus-within"]
  },
  plugins: []
};
