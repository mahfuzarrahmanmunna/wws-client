import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/", // Ensure this is set to '/' for proper routing
  build: {
    chunkSizeWarningLimit: 1000, // Increase from default 500 to reduce warnings
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
          // Add other chunks as needed
        },
      },
    },
  },
});
