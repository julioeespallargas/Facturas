import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base: "./" para que funcione en subrutas (GitHub Pages, etc.)
export default defineConfig({
  plugins: [react()],
  base: "./",
});
