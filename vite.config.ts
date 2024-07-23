import { defineConfig } from "vite";
import monkey from "vite-plugin-monkey";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    monkey({
      entry: "src/main.ts",
      userscript: {
        icon: "https://cdn.ihan.club/club.ico",
        name: "开发环境下登录自动更新cookie",
        namespace: "https://github.com/KazooTTT/auto-update-cookie",
        match: ["http://localhost:*/*"],
        author: "KazooTTT",
        description: "开发环境下登录自动更新cookie，减少手动更新cookie",
        license: "MIT",
        version: "0.0.1",
      },
    }),
  ],
  build: {
    target: "es2015",
  },
});
