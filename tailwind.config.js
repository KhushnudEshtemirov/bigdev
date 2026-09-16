/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Public Sans", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      colors: {
        // Brand / primary
        brand: {
          DEFAULT: "#3b5bdb",
          light: "#eef1fd",
          muted: "#dfe5fb",
        },
        // Green (success / HUMO)
        green: {
          DEFAULT: "#17a47d",
          dark: "#0f8a66",
          darker: "#0c7757",
          light: "#e3f5ef",
          muted: "#9fd8c4",
        },
        // Blue (UZCARD)
        blue: {
          DEFAULT: "#2f6df0",
          dark: "#205ed6",
          light: "#e6efff",
        },
        // Red / danger
        red: {
          DEFAULT: "#d24b4b",
          light: "#fee2e2",
        },
        // Amber / warning
        amber: {
          DEFAULT: "#c98a16",
        },
        // Purple (source: run)
        purple: {
          DEFAULT: "#7a52d4",
        },
        // Neutral palette
        ink: {
          900: "#1b2330",
          700: "#3a4250",
          500: "#46505d",
          400: "#6b7480",
          300: "#5e6672",
          200: "#5e6672",
          100: "#646c79",
          50: "#cfd4db",
        },
        surface: {
          DEFAULT: "#ffffff",
          50: "#fafbfc",
          100: "#f5f6f8",
          200: "#f3f5f9",
          300: "#eef0f4",
          400: "#e7e9ee",
          500: "#dfe2e8",
          600: "#eceef2",
        },
      },
      borderRadius: {
        card: "14px",
        chip: "5px",
        btn: "9px",
        seg: "9px",
        tag: "6px",
      },
      boxShadow: {
        card: "0 1px 3px rgba(0,0,0,0.06)",
      },
    },
  },
  plugins: [],
};
