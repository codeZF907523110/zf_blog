import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

//引入路由模块
import router from './router/index'

createApp(App).use(Antd).use(ElementPlus).use(router).mount('#app')
