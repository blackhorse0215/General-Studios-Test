import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';
import postcss from './postcss.config.js';

export default defineConfig({
  plugins: [preact()],
  css:{
    postcss,
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: 'src/pages/Home.jsx',
      output: {
        entryFileNames: 'home.js',
        assetFileNames: 'hometailwind.css',
      }
    }
  },
  resolve: {
    alias: {
      'react': 'preact/compat',
      'react-dom/test-utils': 'preact/test-utils',
      'react-dom': 'preact/compat',
    },
  },
});
