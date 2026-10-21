import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Served from the apex custom domain (67sixseven.xyz), so assets live at the root.
export default defineConfig({
  base: '/',
  plugins: [react()],
  build: { target: 'es2020' }
});
