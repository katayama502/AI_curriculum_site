import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    // プレビュー/ホスティング環境が割り当てる PORT を尊重する
    port: process.env.PORT ? Number(process.env.PORT) : 5173,
  },
})
