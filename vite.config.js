import { defineConfig, loadEnv } from "vite";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  return {
    build: {
      rollupOptions: {
        input: {
          main: "index.html",
          application: "application.html",
        },
      },
    },
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
