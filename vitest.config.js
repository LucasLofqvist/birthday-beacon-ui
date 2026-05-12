import { defineConfig } from "vitest/config";
import vue from "@vitejs/plugin-vue";
import { fileURLToPath, URL } from "node:url";

export default defineConfig({
  plugins: [vue()],

  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },

  test: {
    environment: "happy-dom",
    include: ["tests/**/*.{test,spec}.{js,ts}"],
    reporters: ["verbose"],

    coverage: {
      provider: "v8",
      reporter: ["text", "html"],
      reportsDirectory: "./coverage",
      exclude: [
        "coverage/**",
        "dist/**",

        "src/main.js",
        "src/App.vue",
        "src/router/**",

        "tests/**",

        "*.config.js",
      ],
      // I should increase these thresholds as I add more tests. Maybe block merge if CI fails due to low coverage?
      thresholds: {
        lines: 20,
        functions: 20,
        branches: 20,
        statements: 20,
      },
    },
  },
});
