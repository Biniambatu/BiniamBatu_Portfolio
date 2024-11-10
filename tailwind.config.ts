import type { Config } from "tailwindcss";
import { DEFAULT_CIPHERS } from "tls";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
       DEFAULT: '#000',
       100: '#000319'
      },
    },
  },
  plugins: [],
} satisfies Config;
