import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['"Open Sans"', "sans-serif"],
        secondary: ['"Myriad"', "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          100: "#FFD1DC", // Rosa claro
          80: "#FFA3B3", // Rosa medio
          60: "#FF748A", // Rosa fuerte
          40: "#FF4661", // Rosa oscuro
          20: "#FF1938", // Rosa más oscuro
        },
        secondary: {
          100: "#B3E5FC", // Azul claro
          80: "#81D4FA", // Azul medio
          60: "#4FC3F7", // Azul fuerte
          40: "#29B6F6", // Azul oscuro
          20: "#039BE5", // Azul más oscuro
        },
        accent: {
          100: "#FFC107", // Amarillo claro (para acentos)
          80: "#FFB300",
          60: "#FFA000",
          40: "#FF8F00",
          20: "#FF6F00",
        },
      },
      screens: {
        "3xl": { max: "10000px" }, // => @media (max-width: 10000px) {...}
        "2xl": { max: "2500px" }, // => @media (max-width: 1535px) {...}
        xl: { max: "1279px" }, // => @media (max-width: 1279px) {...}
        lg: { max: "1023px" }, // => @media (max-width: 1023px) {...}
        md: { max: "767px" }, // => @media (max-width: 767px) {...}
        sm: { max: "639px" }, // => @media (max-width: 639px) {...}
        xs: { max: "479px" }, // => @media (max-width: 479px) {...}
        xxs: { max: "394px" }, // => @media (max-width: 394px) {...}
      },
      animation: {
        "spin-slow": "spin 8s linear infinite",
        grow: "grow 0.3s ease-in-out forwards",
      },
      keyframes: {
        grow: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.05)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
