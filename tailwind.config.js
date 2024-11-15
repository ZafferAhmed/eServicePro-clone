/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customBlue: "#0977C2",
        customPurple: "#8C57ff",
        customGreen: "#56CA01",
        customYellow: "#FFB401",
        customBlu: "#16B1FF",
      },
    },
  },
  plugins: [],
};
