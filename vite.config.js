/*
 * @Author: zhangfeng16 zhangfeng16@shuidi-inc.com
 * @Date: 2022-12-20 14:54:58
 * @LastEditors: zhangfeng16 zhangfeng16@shuidi-inc.com
 * @LastEditTime: 2023-01-11 10:52:12
 * @FilePath: /zf-blog/vite.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const path = require('path')
import { resolve } from 'path' // 主要用于alias文件路径别名
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  outDir: 'dist',
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@components': resolve(__dirname, './src/components'),
      '@pages': resolve(__dirname, './src/pages'),
      '@api': resolve(__dirname, './src/api'),
      '@utils': resolve(__dirname, './src/utils'),
      '@plugin': resolve(__dirname, './src/plugin'),
      '@assets': resolve(__dirname, './src/assets')
    },
  },
  server: {
    port: 5000,
    host: '0.0.0.0',
    https: false,
    hmr: true
  },
})

