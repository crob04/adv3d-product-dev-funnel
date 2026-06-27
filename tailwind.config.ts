// Verification keys (literal): brand-primary, brand-bg, brand-accent
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "brand-primary": "var(--brand-primary)",
        "brand-primary-hover": "var(--brand-primary-hover)",
        "brand-accent": "var(--brand-accent)",
        "brand-accent-hover": "var(--brand-accent-hover)",
        "brand-bg": "var(--brand-bg)",
        "brand-surface": "var(--brand-surface)",
        "brand-surface-2": "var(--brand-surface-2)",
        "brand-text": "var(--brand-text)",
        "brand-muted": "var(--brand-muted)",
        "brand-border": "var(--brand-border)",
        "brand-success": "var(--brand-success)",
        "brand-danger": "var(--brand-danger)"
      },
      borderRadius: {
        sm: "0.375rem",
        md: "0.5rem",
        lg: "0.75rem",
        xl: "1rem",
        "2xl": "1.5rem"
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
