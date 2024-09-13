import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        header: "rgb(81, 83, 137)",
        menu: "rgb(161, 169, 254)",
        pink: "rgb(245, 188, 186)",
        green: "rgb(123, 179, 99)",
        yellow: "rgb(254 214 94)",
        pink2: "rgb(243 220 220)",
        pink3: "rgb(207 120 111)",
        text: "rgb(34, 97, 114)",
      },
    },
  },
  plugins: [],
};
export default config;
