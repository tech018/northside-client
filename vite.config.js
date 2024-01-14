import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@constants": path.resolve(__dirname, "./src/constants/"),
      "@pages": path.resolve(__dirname, "./src/pages/"),
      "@modules": path.resolve(__dirname, "./src/modules/"),
      "@routes": path.resolve(__dirname, "./src/routes/"),
      "@layouts": path.resolve(__dirname, "./src/layouts/"),
      "@assets": path.resolve(__dirname, "./src/assets/"),
      "@helpers": path.resolve(__dirname, "./src/helpers/"),
      "@context": path.resolve(__dirname, "./src/context/"),
      "@reducers": path.resolve(__dirname, "./src/reducers/"),
      "@components": path.resolve(__dirname, "./src/components/"),
      "@schema": path.resolve(__dirname, "./src/schema/"),
      "@store": path.resolve(__dirname, "./src/store/"),
    },
  },
});
