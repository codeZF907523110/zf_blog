/*
 * @Author: zhangfeng16 zhangfeng16@shuidi-inc.com
 * @Date: 2022-10-31 16:40:08
 * @LastEditors: zhangfeng16 zhangfeng16@shuidi-inc.com
 * @LastEditTime: 2022-11-01 19:18:15
 * @FilePath: /budget/src/plugins/api.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import api from '@/api/index.ts'
import { createApp } from 'vue'
import App from "@/App.vue"
const app = createApp(App)
app.config.globalProperties.$api = api
