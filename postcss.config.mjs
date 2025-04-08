const config = {
  plugins: ["@tailwindcss/postcss"],
  extend: {
    colors: {
      primary: "#3ca48b",
      secondary: "#f0e9dd",
    },
    dropShadow: {
      glow: "0 0 8px rgba(60, 164, 139, 0.7)",
    },
  },
  extend: {
    keyframes: {
      "fade-in-up": {
        "0%": { opacity: 0, transform: "translateY(20px)" },
        "100%": { opacity: 1, transform: "translateY(0)" },
      },
    },
    animation: {
      "fade-in-up": "fade-in-up 0.8s ease-out forwards",
    },
  },
};

export default config;
