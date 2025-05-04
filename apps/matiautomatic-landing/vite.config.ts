import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { join } from 'path';

export default defineConfig({
  cacheDir: '../../node_modules/.vite/matiautomatic-landing',
  
  plugins: [
    react()
  ],

  server: {
    port: 4200,
    host: 'localhost',
  },

  build: {
    outDir: '../../dist/apps/matiautomatic-landing',
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  }
});