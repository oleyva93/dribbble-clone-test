/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      padding: {
        nav: "0 var(--nav-gutter)",
      },
      gridTemplateColumns: {
        nav: "90px 1fr auto",
      },
      gridTemplateRows: {
        nav: "var(--nav-height)",
      },
    },
  },
  plugins: [],
};
