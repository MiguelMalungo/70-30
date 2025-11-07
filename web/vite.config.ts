import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/70-30/',
  plugins: [react()],
  resolve: {
    alias: {
      crypto: 'crypto-js'
    }
  },
  define: {
    global: 'globalThis',
  }
})
