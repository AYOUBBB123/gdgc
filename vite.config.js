import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/11
export default defineConfig({
  plugins: [react()],
  base:"/gdgc-batna",
})
