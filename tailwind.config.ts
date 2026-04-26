import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  corePlugins: {
    preflight: false,
    container: false,
  },
  theme: {
    screens: { sm: "480px", md: "768px", lg: "1024px" },
    extend: {
      colors: {
        ink: { DEFAULT: "var(--ink)", soft: "var(--ink-soft)" },
        paper: "var(--paper)",
        accent: { DEFAULT: "var(--accent)", dark: "var(--accent-dark)" },
        line: "var(--line)",
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
