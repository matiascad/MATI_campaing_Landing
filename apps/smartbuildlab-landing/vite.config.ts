import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { join } from 'path';

export default defineConfig({
  cacheDir: '../../node_modules/.vite/smartbuildlab-landing',
  
  plugins: [
    react()
  ],

  server: {
    port: 4201,
    host: 'localhost',
  },

  build: {
    outDir: '../../dist/apps/smartbuildlab-landing',
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  }
});