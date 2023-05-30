import { createApp } from 'vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import App from './App.vue'
import './index.css'
// import Antd from 'ant-design-vue';
// import 'ant-design-vue/dist/antd.css';

import ElementPlus from 'element-plus'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import 'element-plus/dist/index.css'
import api from '@/api/index.ts'
//引入路由模块
import router from './router/index'
const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.config.globalProperties.$api = api
app.use(ElementPlus, {
  locale: zhCn
}).use(router).mount('#app')
