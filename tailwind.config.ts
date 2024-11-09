import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        purplish: '#8B43EF',
        bluish: '#6C62FE',
        light_greyish: '#828282',
        dark_greyish: '#0F0F0F',
      },
      fontFamily: {
        axiforma: ['Axiforma', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
