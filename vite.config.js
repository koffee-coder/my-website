// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: './',        // ← make all asset URLs relative
  plugins: [react()],
  build: {
    rollupOptions: {
      external: [
        'react-native-web',
        'react-native-web/dist/apis/StyleSheet/registry'
      ]
    }
  }
});
