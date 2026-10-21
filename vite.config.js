import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Relative asset paths so the same build works at the custom domain root and at
// the GitHub Pages project URL (mzeils.github.io/sixseven-site/).
export default defineConfig({
  base: './',
  plugins: [react()],
  build: { target: 'es2020' }
});
