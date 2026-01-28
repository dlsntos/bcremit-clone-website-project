import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from "path";


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "pages": path.resolve(__dirname, "src/pages"),
      "layout": path.resolve(__dirname, "src/layout"),
      "components": path.resolve(__dirname, "src/components"),
      "assets": path.resolve(__dirname, "src/assets"),
      "features": path.resolve(__dirname, "src/features"),
      "types": path.resolve(__dirname, "src/types"),
      "api": path.resolve(__dirname, "src/api"),
      "data": path.resolve(__dirname, "src/data"),

    }
  },
  server: {
    proxy: {
      'api': 'https://localhost:7284'
    }
  }
})
