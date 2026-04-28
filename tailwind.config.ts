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
        navy: "#01005B",
        "navy-2": "#2A2996",
        cream: "#F9F0E5",
        "cream-dark": "#F0EEEF",
        muted: "#676869",
        border: "#EAEAEA",
        green: "#1FAD40",
        gold: "#FFB801",
      },
      fontFamily: {
        sofia: ["Sofia Pro", "Georgia", "serif"],
        suisse: ["Suisse Int'l", "Helvetica Neue", "Arial", "sans-serif"],
      },
      letterSpacing: {
        wide4: "0.04em",
        wide3: "0.03em",
        wide8: "0.08em",
      },
      boxShadow: {
        card: "0px 3px 10px 1px rgba(0,0,0,0.08)",
      },
    },
  },
  plugins: [],
};

export default config;