import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    dts({
      tsconfigPath: "./tsconfig.json",
    }),
  ],
  build: {
    copyPublicDir: false,
    emptyOutDir: true,
    sourcemap: true,
    target: "esnext",
    cssCodeSplit: true,
    lib: {
      entry: {
        "msc-button": "./src/msc-button/msc-button.ts",
        "msc-brand1-tokens.css": "./src/msc-brand1/msc-brand1-tokens.css",
      },
      formats: ["es"],
      name: "msc-component-library",
    },
    rollupOptions: {
      output: {
        dir: "dist",
        format: "esm",
        entryFileNames: "[name]/[name].js",
        assetFileNames: "assets/[name][extname]",
        chunkFileNames: "chunks/[name]-[hash].chunk.js",
      },
      treeshake: "recommended",
    },
  },
});
