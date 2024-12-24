import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000/', // Your API server
        changeOrigin: true,
        secure: false, // Use this if you're working with self-signed certificates
      },
    },
  },
  plugins: [react()],
})