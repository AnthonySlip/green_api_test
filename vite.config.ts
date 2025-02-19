import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/postcss";
import autoprefixer from "autoprefixer";

export default defineConfig({
  plugins: [react()],
  css: {
    modules: {},
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/styles/variables.scss";`, // Глобальные SCSS-переменные (если нужно)
      },
    },
    postcss: {
      plugins: [tailwindcss(), autoprefixer()],
    },
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
