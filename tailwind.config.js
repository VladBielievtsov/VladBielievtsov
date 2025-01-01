/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        base: "#1e1e2e",
        text: "#cdd6f4",
        red: "#f38ba8",
        green: "#a6e3a1",
        sapphire: "#74c7ec",
        mauve: "#cba6f7",
      },
    },
  },
  plugins: [],
};
