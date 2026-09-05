import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

const ENVIRONMENT = process.env.ENVIRONMENT ?? "development";
const PROJECT_NAME = process.env.PROJECT_NAME ?? "patchwork";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  define: {
    // Expose non-VITE-prefixed env vars to the client for analytics.
    "import.meta.env.ENVIRONMENT": JSON.stringify(ENVIRONMENT),
    "import.meta.env.PROJECT_NAME": JSON.stringify(PROJECT_NAME),
  },
});