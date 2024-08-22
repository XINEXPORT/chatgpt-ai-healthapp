// vite.config.js
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    base: "/chatgpt-ai-healthapp/",
    plugins: [react()],
    define: {
      "process.env.VITE_OPENAI_API_KEY": JSON.stringify(
        env.VITE_OPENAI_API_KEY,
      ),
    },
    server: {
      proxy: {
        // Proxy API requests to the Express server
        "/chatgpt-ai-healthapp/api": {
          target: "http://localhost:8000", // URL of your Express server
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/chatgpt-ai-healthapp/, ""),
        },
      },
    },
  };
});
