/** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        mono: ["var(--font-mono)"],
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            "--tw-prose-body": "#1b1b1b",
            "--tw-prose-headings": "#1b1b1b",
            "--tw-prose-links": "#B63E96",
            "--tw-prose-bold": "#1b1b1b",
            "--tw-prose-quotes": "#1b1b1b",
            "--tw-prose-quote-borders": "#B63E96",
            "--tw-prose-code": "#1b1b1b",
            "--tw-prose-th-borders": "rgba(27,27,27,0.4)",
            "--tw-prose-td-borders": "rgba(27,27,27,0.15)",
            // Dark mode (prose-invert) overrides
            "--tw-prose-invert-body": "#f5f5f5",
            "--tw-prose-invert-headings": "#f5f5f5",
            "--tw-prose-invert-links": "#58E6D9",
            "--tw-prose-invert-bold": "#f5f5f5",
            "--tw-prose-invert-quotes": "#f5f5f5",
            "--tw-prose-invert-quote-borders": "#58E6D9",
            "--tw-prose-invert-code": "#f5f5f5",
            "--tw-prose-invert-th-borders": "rgba(245,245,245,0.4)",
            "--tw-prose-invert-td-borders": "rgba(245,245,245,0.15)",
            maxWidth: "none",
            a: {
              fontWeight: "600",
              textDecoration: "underline",
              textUnderlineOffset: "3px",
            },
            // Inline code only (fenced blocks are handled by rehype-pretty-code)
            "code:not(pre code)": {
              backgroundColor: "rgba(27,27,27,0.08)",
              padding: "0.15em 0.4em",
              borderRadius: "0.3rem",
              fontWeight: "500",
            },
            "code:not(pre code)::before": { content: '""' },
            "code:not(pre code)::after": { content: '""' },
            // Tables get clear separation
            thead: {
              borderBottomWidth: "2px",
            },
            "thead th": {
              fontWeight: "700",
            },
            "tbody tr": {
              borderBottomWidth: "1px",
            },
          },
        },
        invert: {
          css: {
            "code:not(pre code)": {
              backgroundColor: "rgba(245,245,245,0.1)",
            },
          },
        },
      }),
    },
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }

      xs: { max: "479px" },
      // => @media (max-width: 479px) { ... }
    },
    colors: {
      dark: "#1b1b1b",
      light: "#f5f5f5",
      gray: "#666666",
      primary: "#B63E96", // 240,86,199
      primaryDark: "#58E6D9", // 80,230,217
    },
    animation: {
      "spin-slow": "spin 8s linear infinite",
    },
    backgroundImage: {
      circularLight:
        "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px,#f5f5f5 100px);",
      circularDark:
        "repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b1b1b 8px,#1b1b1b 100px);",
      circularLightLg:
        "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px,#f5f5f5 80px);",
      circularDarkLg:
        "repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b1b1b 8px,#1b1b1b 80px);",
      circularLightMd:
        "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px,#f5f5f5 60px)",
      circularDarkMd:
        "repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b1b1b 6px,#1b1b1b 60px)",
      circularLightSm:
        "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px,#f5f5f5 40px)",
      circularDarkSm:
        "repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b1b1b 4px,#1b1b1b 40px)",
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
