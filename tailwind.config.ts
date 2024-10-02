import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors : {
        main : "#D9F99D",
        second: "#bcf94b"
      },
      screens : {
        sm : "576px",
        md : "768px",
        lg : "992px",
        xl : "1200px",
        "2xl" : "1400px"
      },
      boxShadow: {
        "3d" : "3px 3px 7px rgba(0,0,0,0.2), inset 3px 3px 3px rgba(255,255,255,0.7)",
        "hole" : "inset -3px -3px 7px rgba(0,0,0,0.2), inset 3px 3px 3px rgba(0,0,0,0.2)"
      }
    },
  },
  plugins: [],
};
export default config;
