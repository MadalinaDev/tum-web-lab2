import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  corePlugins: {
    preflight: false,
    container: false,
  },
  theme: {
    screens: { sm: "480px", md: "768px", lg: "1024px" },
    extend: {
      colors: {
        ink: { DEFAULT: "#111215", soft: "#2a2d33" },
        paper: "#f6f1ea",
        accent: { DEFAULT: "#d97a35", dark: "#a4541c" },
        line: "#e5d7c8",
      },
      fontFamily: {
        display: ['"Playfair Display"', "Georgia", "serif"],
        body: ['"Source Sans 3"', "Georgia", "serif"],
      },
      boxShadow: {
        card: "0 18px 40px rgba(17, 18, 21, 0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
