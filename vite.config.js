import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/neotr-portfolio/",
  plugins: [react()],
  resolve: {
    alias: {
      "@/components": "/src/components/", // Adjust the path accordingly
    },
  },
});
