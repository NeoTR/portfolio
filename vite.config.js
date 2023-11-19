import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/", // Use a relative path or your domain if deploying to a subpath
  plugins: [react()],
});
