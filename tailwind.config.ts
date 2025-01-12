import { Plus_Jakarta_Sans } from "next/font/google";
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
        lightHover: '#fcf4ff',
        darkHover: '#2a004a',
        darkTheme: '#11001F', 
      },
      fontFamily: {
        jakarta: ["Plus Jakarta Sans", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        'black' : '4px 4px 0 #000',
        'white' : '4px 4px 0 #fff',
      },
      gridTemplateColumns: {
        'auto' : 'repeat(auto-fit, minmax(200px, 1fr))'
      },
    },
  },
  plugins: [],
};

export default config;
