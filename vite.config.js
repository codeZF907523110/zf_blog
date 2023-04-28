/*
 * @Author: zhangfeng16 zhangfeng16@shuidi-inc.com
 * @Date: 2022-12-20 14:54:58
 * @LastEditors: zhangfeng16 907523110@qq.com
 * @LastEditTime: 2023-04-28 16:11:07
 * @FilePath: /zf-blog/vite.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
const path = require('path')
import { resolve } from 'path' // 主要用于alias文件路径别名
// https://vitejs.dev/config/
export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd())
  return defineConfig({
    plugins: [vue()],
    outDir: 'dist',
    build: {
      chunkSizeWarningLimit: 3000
    },
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
    css: {
      preprocessorOptions: {
        scss: {
          charset: false
        }
      },
      postcss: {
        plugins: [
          {
            postcssPlugin: 'internal:charset-removal',
            AtRule: {
              charset: (atRule) => {
                if (atRule.name === 'charset') {
                  atRule.remove()
                }
              }
            }
          }
        ],
      },
    },
    server: {
      port: 80,
      host: '0.0.0.0',
      https: false,
      hmr: true,
      proxy: {
        '/api': {
            target: 'https://www.zf-blog-serve.top',//替换的服务端地址
            changeOrigin: true,//开启代理，允许跨域
            rewrite: path => path//设置重写的路径
        }
      }
    },
  })
}
