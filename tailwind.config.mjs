/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        mainLayout: "340px  repeat(2, minmax(0, 1fr))",
      },
      fontFamily: {
        "fire-code-normal": ["Fira Code"],
        "fire-code-light": ["Fira Code light"],
        "fire-code-medium": ["Fira Code medium"],
        "fire-code-semi-bold": ["Fira Code semi-bold"],
        "fire-code-bold": ["Fira Code bold"],
        "fire-code-vf": ["Fira Code VF"],
        "fire-code-retina": ["Fira Code Retina"],
      },
      colors: {
        primary: {
          DEFAULT: "#011627",
          dark: "#011221",
          darked: "#01080E",
        },
        secondary: {
          gray: "#607B96",
          green: "#3C9D93",
          blue: "#4D5BCE",
          white: "#FFFFFF",
        },
        accent: {
          orange: "#FEA55F",
          green: "#43D9AD",
          pink: "#E99287",
          purple: "#C98BDF",
        },
        button: {
          default: "#1C2B3A",
          primary: "#FEA55F",
          ghost: "#FFFFFF",
        },
        buttonHover: {
          default: "#263B50",
          primary: "#FFAC6B",
          ghost: "#FFFFFF",
        },
        buttonText: {
          primary: "#01080E",
        },
        "link-hover-background": "#1e2d3d74",
        linescolor: "#1e2d3d",
      },
    },
  },
  plugins: [],
};
