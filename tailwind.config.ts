import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'brand': '#FC4308',
      'white': '#FFF',
      'black': '#3E3232',
      'black-75': 'rgba(0, 0, 0, 0.75)',
      'black-50':'rgba(62, 50, 50, 0.5)',
      'gray': '#F5F5F5',

    }
  },
  plugins: [],
};
export default config;
