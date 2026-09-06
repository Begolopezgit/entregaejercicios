import { defineConfig } from "vite";
export default defineConfig({
  server: {
    watch: {
      usePolling: true, // <--- ESTA ES LA CLAVE MÁGICA
    },
  },
});
