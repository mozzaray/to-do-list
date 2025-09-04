import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { version } from './package.json'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: process.env.NODE_ENV === 'production'
    ? '/to-do-list/' // ex: '/the_f2e_2022_week1/'
    : '/',
  define: {
    __APP_VERSION__: JSON.stringify(version), // 定義全域變數
  },
})
