import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  // 1. Ruta base para GitHub Pages (mi repositorio)
  base: "/entregaejercicios/",

  // 2. Tu "clave mágica" para que WSL detecte los cambios al guardar
  // necesario por si siguo haciendo cambios
  server: {
    watch: {
      usePolling: true,
    },
  },

  // 3. Configuración para empaquetar todos los HTML en producción
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        ejercicio1: "js_ejercicio_1.html",
        ejercicio2: "js_ejercicio_2.html",
        ejercicio3: "js_ejercicio_3.html",
        ejercicio4: "js_ejercicio_4.html",
        ejercicio5: "js_ejercicio_5.html",
        ejercicio6: "js_ejercicio_6.html",
        ejercicio7: "js_ejercicio_7.html",
        ejercicio8: "js_ejercicio_8.html",
        ejercicio9: "js_ejercicio_9.html",
      },
    },
  },
});
