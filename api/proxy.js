/*
 * @Author: zhangfeng16 907523110@qq.com
 * @Date: 2023-03-16 15:50:48
 * @LastEditors: zhangfeng16 907523110@qq.com
 * @LastEditTime: 2023-03-16 17:29:48
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