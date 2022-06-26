import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  server: {
    port: 3000,
  },
  plugins: [vue(),vueJsx()],
  resolve: {
    alias: {
      '/@': path.resolve(__dirname, 'src')
    }
  },
  build: {
    outDir: 'dist'
  }
})