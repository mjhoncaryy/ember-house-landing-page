import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        charred: "oklch(13% 0.015 54)",
        ember: "oklch(58% 0.16 45)",
        emberDeep: "oklch(42% 0.14 43)",
        surface: "oklch(18% 0.018 54)",
        surfaceHigh: "oklch(23% 0.023 54)",
        cream: "oklch(91% 0.045 78)",
        taupe: "oklch(70% 0.052 71)",
        olive: "oklch(51% 0.066 117)",
        borderSoft: "oklch(91% 0.045 78 / 0.14)"
      },
      fontFamily: {
        display: ["Bodoni Moda", "Georgia", "serif"],
        body: ["Alegreya Sans", "Arial", "sans-serif"]
      },
      boxShadow: {
        focus: "0 0 0 3px oklch(58% 0.16 45 / 0.34)",
        lift: "0 8px 8px oklch(8% 0.01 54 / 0.24)"
      }
    }
  },
  plugins: []
} satisfies Config;
