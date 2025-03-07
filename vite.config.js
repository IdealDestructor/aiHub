import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

export default defineConfig({
  base: "/aiHub/", // 显式指定基础路径
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 3000,
    open: true,
    hmr: {
      overlay: true,
      protocol: "ws", // 使用WebSocket
      host: "localhost",
      timeout: 30000,
    },
    watch: {
      usePolling: true,
      interval: 500, // 更快的轮询
      ignored: ["!**/node_modules/**"],
    },
    force: true, // 强制服务器重新构建
  },
  optimizeDeps: {
    include: ["vue", "vue-router", "pinia"], // 预构建这些频繁使用的包
  }
});
