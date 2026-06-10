import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  base: "/portfolio/",
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon/favicon.svg", "favicon/apple-touch-icon.png"],
      manifest: {
        name: "Reeni Reactjs",
        short_name: "Reeni",
        description: "Personal Portfolio Reactjs Template",
        theme_color: "#ffffff",
        display: "standalone",
        icons: [
          {
            src: "/portfolio/favicon/web-app-manifest-192x192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any maskable",
          },
          {
            src: "/portfolio/favicon/web-app-manifest-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        silenceDeprecations: ["import", "global-builtin", "mixed-decls"],
      },
    },
  },
  build: {
    // Raise the warning threshold — large chunks are expected for a portfolio
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          // Core React runtime — tiny, cached forever
          "vendor-react": ["react", "react-dom", "react-router-dom"],
          // GSAP — large, changes rarely
          "vendor-gsap": ["gsap"],
          // Swiper — large, changes rarely
          "vendor-swiper": ["swiper"],
          // EmailJS + reCAPTCHA — only needed for contact form
          "vendor-contact": ["@emailjs/browser", "react-google-recaptcha"],
          // Particles — only used on non-home-2 pages
          "vendor-particles": ["@tsparticles/react", "@tsparticles/slim"],
        },
      },
    },
  },
});
