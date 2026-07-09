import { defineConfig } from "vite-plus";
import { fileURLToPath } from "node:url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

export default defineConfig({
  staged: {
    "*": "vp check --fix",
  },
  fmt: {},
  lint: {
    jsPlugins: [{ name: "vite-plus", specifier: "vite-plus/oxlint-plugin" }],
    rules: { "vite-plus/prefer-vite-plus-imports": "error" },
    options: { typeAware: true, typeCheck: true },
  },
  resolve: {
    alias: {
      "@": `${__dirname}src`,
      "@/components": `${__dirname}src/components`,
      "@/layouts": `${__dirname}src/layouts`,
      "@/pages": `${__dirname}src/pages`,
      "@/styles": `${__dirname}src/styles`,
      "@/assets": `${__dirname}src/assets`,
    },
  },
});
