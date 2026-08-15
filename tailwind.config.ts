import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: { "2xl": "1400px" },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-tajawal)", "Tajawal", "sans-serif"],
        display: ["var(--font-cairo)", "Cairo", "sans-serif"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          50: "#eef7f6",
          100: "#d3e9e7",
          200: "#a7d3cf",
          300: "#78b9b3",
          400: "#4f9f97",
          500: "#2f827a",
          600: "#1f6b64",
          700: "#175450", // نيلي غامق - Deep Nile
          800: "#0f3b38",
          900: "#0a2b29",
          950: "#061c1a",
        },
        gold: {
          DEFAULT: "#C9A227",
          50: "#faf6e6",
          100: "#f3e8bf",
          200: "#e8d287",
          300: "#dcbb52",
          400: "#d3ac38",
          500: "#C9A227",
          600: "#a5811d",
          700: "#7d611a",
          800: "#584416",
          900: "#3a2d10",
        },
        sand: {
          50: "#FBF8F3",
          100: "#F5EFE3",
          200: "#EBE0CB",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        success: {
          DEFAULT: "#1f7a4d",
          foreground: "#ffffff",
        },
        warning: {
          DEFAULT: "#b3760c",
          foreground: "#ffffff",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        soft: "0 2px 10px 0 rgb(15 59 56 / 0.06)",
        card: "0 1px 3px 0 rgb(15 59 56 / 0.08), 0 1px 2px -1px rgb(15 59 56 / 0.06)",
      },
      backgroundImage: {
        "pyramid-pattern":
          "linear-gradient(135deg, rgba(201,162,39,0.06) 25%, transparent 25%), linear-gradient(225deg, rgba(201,162,39,0.06) 25%, transparent 25%)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          from: { opacity: "0", transform: "translateY(4px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.25s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
