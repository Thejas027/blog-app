import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3000", // Ensure this matches your backend port
        changeOrigin: true,               // Add this line
        secure: false,
      },
    },
  },
  plugins: [react()],
});
    