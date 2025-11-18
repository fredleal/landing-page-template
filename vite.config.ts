import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  define: {
    'process.env': JSON.stringify(process.env),
    'process.env.NODE_ENV': JSON.stringify('development'),
    global: 'globalThis',
  },
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      // Mock Next.js modules that aren't needed in Vite
      'next/image': path.resolve(__dirname, './src/mocks/next-image.ts'),
      'next/link': path.resolve(__dirname, './src/mocks/next-link.tsx'),
    },
  },
})
