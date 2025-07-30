// vite.config.js
import { defineConfig } from "file:///home/juanca/Escritorio/Cursos/REACTGITHUBEDUCATION/citr-v9-project/padre-ginos/node_modules/vite/dist/node/index.js";
import react from "file:///home/juanca/Escritorio/Cursos/REACTGITHUBEDUCATION/citr-v9-project/padre-ginos/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { TanStackRouterVite } from "file:///home/juanca/Escritorio/Cursos/REACTGITHUBEDUCATION/citr-v9-project/padre-ginos/node_modules/@tanstack/router-plugin/dist/esm/vite.js";
var vite_config_default = defineConfig({
  server: {
    proxy: {
      // Cualquier solicitud que empiece con /api se redirige al backend en localhost:3000
      "/api": {
        target: "http://localhost:3000",
        // URL del backend
        changeOrigin: true
        // Cambia el origen de la solicitud para evitar errores CORS
        // Ejemplo: fetch('/api/users') irá a http://localhost:3000/api/users
      },
      // También redirige las rutas que empiezan por /public
      "/public": {
        target: "http://localhost:3000",
        // Usado para servir archivos estáticos desde el backend
        changeOrigin: true
        // Ejemplo: <img src="/public/img/logo.png"> irá a http://localhost:3000/public/img/logo.png
      }
    }
  },
  plugins: [react(), TanStackRouterVite()],
  test: {
    environment: "happy-dom"
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9qdWFuY2EvRXNjcml0b3Jpby9DdXJzb3MvUkVBQ1RHSVRIVUJFRFVDQVRJT04vY2l0ci12OS1wcm9qZWN0L3BhZHJlLWdpbm9zXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9qdWFuY2EvRXNjcml0b3Jpby9DdXJzb3MvUkVBQ1RHSVRIVUJFRFVDQVRJT04vY2l0ci12OS1wcm9qZWN0L3BhZHJlLWdpbm9zL3ZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL2p1YW5jYS9Fc2NyaXRvcmlvL0N1cnNvcy9SRUFDVEdJVEhVQkVEVUNBVElPTi9jaXRyLXY5LXByb2plY3QvcGFkcmUtZ2lub3Mvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdFwiO1xuaW1wb3J0IHsgVGFuU3RhY2tSb3V0ZXJWaXRlIH0gZnJvbSBcIkB0YW5zdGFjay9yb3V0ZXItcGx1Z2luL3ZpdGVcIjtcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHNlcnZlcjoge1xuICAgIHByb3h5OiB7XG4gICAgICAvLyBDdWFscXVpZXIgc29saWNpdHVkIHF1ZSBlbXBpZWNlIGNvbiAvYXBpIHNlIHJlZGlyaWdlIGFsIGJhY2tlbmQgZW4gbG9jYWxob3N0OjMwMDBcbiAgICAgIFwiL2FwaVwiOiB7XG4gICAgICAgIHRhcmdldDogXCJodHRwOi8vbG9jYWxob3N0OjMwMDBcIiwgLy8gVVJMIGRlbCBiYWNrZW5kXG4gICAgICAgIGNoYW5nZU9yaWdpbjogdHJ1ZSwgLy8gQ2FtYmlhIGVsIG9yaWdlbiBkZSBsYSBzb2xpY2l0dWQgcGFyYSBldml0YXIgZXJyb3JlcyBDT1JTXG4gICAgICAgIC8vIEVqZW1wbG86IGZldGNoKCcvYXBpL3VzZXJzJykgaXJcdTAwRTEgYSBodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3VzZXJzXG4gICAgICB9LFxuXG4gICAgICAvLyBUYW1iaVx1MDBFOW4gcmVkaXJpZ2UgbGFzIHJ1dGFzIHF1ZSBlbXBpZXphbiBwb3IgL3B1YmxpY1xuICAgICAgXCIvcHVibGljXCI6IHtcbiAgICAgICAgdGFyZ2V0OiBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMFwiLCAvLyBVc2FkbyBwYXJhIHNlcnZpciBhcmNoaXZvcyBlc3RcdTAwRTF0aWNvcyBkZXNkZSBlbCBiYWNrZW5kXG4gICAgICAgIGNoYW5nZU9yaWdpbjogdHJ1ZSxcbiAgICAgICAgLy8gRWplbXBsbzogPGltZyBzcmM9XCIvcHVibGljL2ltZy9sb2dvLnBuZ1wiPiBpclx1MDBFMSBhIGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9wdWJsaWMvaW1nL2xvZ28ucG5nXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG5cbiAgcGx1Z2luczogW3JlYWN0KCksIFRhblN0YWNrUm91dGVyVml0ZSgpXSxcbiAgdGVzdDp7XG4gICAgZW52aXJvbm1lbnQ6IFwiaGFwcHktZG9tXCIsXG4gIH1cbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUErWixTQUFTLG9CQUFvQjtBQUM1YixPQUFPLFdBQVc7QUFDbEIsU0FBUywwQkFBMEI7QUFDbkMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsUUFBUTtBQUFBLElBQ04sT0FBTztBQUFBO0FBQUEsTUFFTCxRQUFRO0FBQUEsUUFDTixRQUFRO0FBQUE7QUFBQSxRQUNSLGNBQWM7QUFBQTtBQUFBO0FBQUEsTUFFaEI7QUFBQTtBQUFBLE1BR0EsV0FBVztBQUFBLFFBQ1QsUUFBUTtBQUFBO0FBQUEsUUFDUixjQUFjO0FBQUE7QUFBQSxNQUVoQjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFFQSxTQUFTLENBQUMsTUFBTSxHQUFHLG1CQUFtQixDQUFDO0FBQUEsRUFDdkMsTUFBSztBQUFBLElBQ0gsYUFBYTtBQUFBLEVBQ2Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
