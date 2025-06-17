import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
// https://vite.dev/config/
export default defineConfig({
  base: '/dtu/',  // Имя репозитория
  plugins: [svelte()],
  build: {
    outDir: 'dist',
  }
});