import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/mojito-bar/", // Додаємо цей рядок
  plugins: [react(), tailwindcss()],
});
