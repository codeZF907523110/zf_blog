/*
 * @Author: zhangfeng16 zhangfeng16@shuidi-inc.com
 * @Date: 2022-10-31 16:16:36
 * @LastEditors: zhangfeng16 zhangfeng16@shuidi-inc.com
 * @LastEditTime: 2023-01-10 19:09:37
 * @FilePath: /budget/src/plugins/element-ui.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createApp } from 'vue'
import App from "@/App.vue"
// import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
const app = createApp(App)

app.use(ElementPlus, {
  size: 'small'
})
