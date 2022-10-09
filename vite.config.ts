import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/mkts/",
  build: {
    outDir: "../mkts-lib/docs/",
    emptyOutDir: true
  },
  server: {
    host: "127.0.0.1",
    port: 8001
  },
  plugins: [react()]
});
