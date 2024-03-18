import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      textColor: {
        primary: "#ECBE21",
        primary2: "#FEDA00",
        secondary: "#D80707",
        secondaryHover: "#b30707",
        secondary99: "#D8070799",
        tertiary: "#F37832",
      },
      backgroundColor: {
        primary: "#ECBE21",
        primary2: "#FEDA00",
        secondary: "#D80707",
        secondaryHover: "#b30707",
        secondary99: "#D8070799",
        tertiary: "#F37832",
        tertiaryHover: "#E26D2A",
      },
      padding: {
        mobile: "16px",
        tablet: "32px",
        desktop: "64px",
      },
      screens: {
        image: "1100px",
        mobile: "320px",
        tablet: "768px",
        desktop: "1024px",
        greatDesktop: "1536px",
      },
      fontFamily: {
        title: ["dienstag", "sans-serif"],
        body: ["poppins", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
