import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
export default defineConfig({
  server: {
    proxy: {
      // Cualquier solicitud que empiece con /api se redirige al backend en localhost:3000
      "/api": {
        target: "http://localhost:3000", // URL del backend
        changeOrigin: true, // Cambia el origen de la solicitud para evitar errores CORS
        // Ejemplo: fetch('/api/users') irá a http://localhost:3000/api/users
      },

      // También redirige las rutas que empiezan por /public
      "/public": {
        target: "http://localhost:3000", // Usado para servir archivos estáticos desde el backend
        changeOrigin: true,
        // Ejemplo: <img src="/public/img/logo.png"> irá a http://localhost:3000/public/img/logo.png
      },
    },
  },

  plugins: [react(), TanStackRouterVite()],
  test: {
    environment: "happy-dom",
    coverage: {
      reporter: ["text", "json", "html"],
    },
  },
});
