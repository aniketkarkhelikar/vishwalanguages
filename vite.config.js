import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import Sitemap from 'vite-plugin-sitemap';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    react(),
    Sitemap({
      hostname: 'https://vishwalanguages.com',
      dynamicRoutes: [
        '/',
        '/about',
        '/services',
        '/corporate-training',
        '/healthcare-placement',
        '/interpretation-services',
        '/translation-services',
        '/languages',
        '/contact',
        '/languages/german',
        '/languages/japanese',
        '/languages/french',
        '/languages/spanish',
        '/languages/english',
        '/languages/ielts',
        '/languages/mandarin',
        '/languages/korean',
        '/languages/sanskrit'
      ]
    })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  build: {
    // Code splitting for better caching
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          'vendor-motion': ['framer-motion'],
          'vendor-icons': ['lucide-react'],
        },
      },
    },
    // Performance budgets
    chunkSizeWarningLimit: 500,
    // Minification
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    // Target modern browsers for smaller bundles
    target: 'es2020',
    // CSS code splitting
    cssCodeSplit: true,
    // Source maps for production debugging
    sourcemap: false,
  },
  // Development server
  server: {
    port: 5173,
    open: false,
  },
  // CSS processing
  css: {
    devSourcemap: true,
  },
});
