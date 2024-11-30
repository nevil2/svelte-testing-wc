import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue({
      customElement: true,
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.includes("topo-editor"),
        },
      },
    }),
  ],
  build: {
    lib: {
      entry: "./src/main.ce.ts",
      name: "image-wc",
      fileName: "image-wc",
    },
  },
  define: {
    "process.env": process.env,
  },
});
