/*
 * @Author: 流觞曲水 907523110@qq.com
 * @Date: 2023-02-07 17:33:33
 * @LastEditors: 流觞曲水 907523110@qq.com
 * @LastEditTime: 2023-02-07 17:34:15
 * @FilePath: /zf_blog/api/proxy.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 该服务为 vercel serve跨域处理
const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = (req, res) => {
  let target = ''

  // 代理目标地址
  // xxxxx 替换为你跨域请求的服务器 如： http://baidu.com
  if (req.url.startsWith('/api')) {
  // 这里填目标地址
    target = 'https://www.zf-blog-serve.top'
  }
  // 创建代理对象并转发请求
  createProxyMiddleware({
    target,
    changeOrigin: true
  })(req, res)
}