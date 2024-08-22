import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'todo-components',
      filename: 'remoteEntry.js',
      exposes: {
        './List': './src/components/List.jsx',
        './Input': './src/components/Input.jsx',
        './Header': './src/components/Header.jsx',
      },
      shared: ['react'],
    }),
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
})
