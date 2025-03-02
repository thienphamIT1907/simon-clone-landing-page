import { defineConfig, loadEnv } from "vite";

export default defineConfig(({ mode }) => {
  // Load environment variables manually
  const env = loadEnv(mode, process.cwd());

  return {
    server: {
      proxy: {
        "/api": {
          target: env.VITE_SIMON_BACKEND_ENDPOINT || "http://localhost:3000",
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ""),
        },
      },
    },
  };
});
