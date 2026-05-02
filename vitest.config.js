import { defineConfig } from "vitest/config";
import vue from "@vitejs/plugin-vue";
import path from "path";

export default defineConfig({
  plugins: [vue()],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  test: {
    environment: "happy-dom",

    include: ["tests/**/*.{test,spec}.{js,ts}"],

    reporters: ["verbose"],

    // Maybe add coverge reports later.
  },
});
