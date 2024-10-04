import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { createRequire } from 'module';

// Create a require function for the Node.js module system
const require = createRequire(import.meta.url);

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      buffer: require.resolve('buffer/'),
    },
  },
  define: {
    'process.env': {},
    global: {},
  },
  // Enable this if you use Node.js globals
  build: {
    rollupOptions: {
      output: {
        globals: {
          Buffer: 'buffer',
        },
      },
    },
  },
});

