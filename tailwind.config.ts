import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'selector',
  theme: {
    extend: {
      borderRadius: {
        heavy: "40px"
      },
      colors: {
        accent: {
          DEFAULT: "#ebd79b",
          '50': '#fcf8ee',
          '100': '#f5ecd0',
          '200': '#ebd79b',
          '300': '#e1bf68',
          '400': '#daa945',
          '500': '#d18d2f',
          '600': '#b86e27',
          '700': '#995124',
          '800': '#7e4022',
          '900': '#68351f',
          '950': '#3b1b0d',
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
