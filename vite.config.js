import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path'; // Importa el módulo path

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  assetsInclude: ['**/*.svg'], // Asegura que Vite maneje SVGs como assets
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Configura el alias @ para que apunte a ./src
    },
  },
});