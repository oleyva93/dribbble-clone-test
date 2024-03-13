import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

const env = loadEnv("mock", process.cwd(), "");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      app: "/src/app",
      shared: "/src/shared",
      assets: "/src/assets",
    },
  },
  define: {
    "process.env": {
      ...env,
    },
  },
});
