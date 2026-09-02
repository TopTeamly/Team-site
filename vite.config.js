import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Base matches the GitHub Pages project path:
// https://<username>.github.io/THETOPTEAM-LY-2026august/
export default defineConfig({
  plugins: [react()],
  base: '/Team-site/',
})
