<!--
 * @Author: 流觞曲水 907523110@qq.com
 * @Date: 2022-10-15 20:30:45
 * @LastEditors: zhangfeng16 907523110@qq.com
 * @LastEditTime: 2023-05-29 10:57:11
 * @FilePath: /zf-blog/src/pages/Display/Display.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class='display'
    v-loading.fullscreen.lock="$store.state.isloading"
    element-loading-text="Loading..."
    :element-loading-spinner="svg"
    element-loading-svg-view-box="-10, -10, 50, 50"
    element-loading-background="rgba(122, 122, 122, 0.8)"
  >
    <Header></Header>
    <!-- <Loading :class="{diasplayload:!$store.state.isloading}"></Loading> -->
    <div class='alticle' >
      <div class='alticleleft' :style="`width: ${route.fullPath.includes('/articlecontent') ? '100%' : '880px'}`">
          <div class='thisrouter'>
              <el-breadcrumb :separator-icon="ArrowRight">
                  <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                  <el-breadcrumb-item>{{route.meta.title  }}</el-breadcrumb-item>
              </el-breadcrumb>
          </div>
          <router-view v-slot="{ Component }">
            <keep-alive>
              <component :is="Component" :key="route.fullPath" />
            </keep-alive>
          </router-view>
      </div>
      <div v-if="!route.fullPath.includes('articlecontent')" class='alticleright'>
          <Myinfo />
          <Siteinfo style="margin-top:10px" />
          <Newmessage style="margin-top:10px" />
          <Lables style="margin-top:10px" />
      </div>
    </div>
    <el-backtop :bottom="100">
      <div class="go_top_icon">
        <svg t="1684834459896" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2356" width="200" height="200"><path d="M736.804 448.468c3.26-257.385-208.513-374.677-224.807-384.45-13.029 6.516-228.062 123.804-224.801 384.45-42.357 29.323-87.969 78.195-81.452 162.903 6.516 84.708 91.225 143.354 123.804 140.098 32.584-3.26 22.805-26.067 22.805-26.067l9.778-45.613s48.868 71.68 61.9 71.68h175.933c16.29 0 61.902-71.68 61.902-71.68l9.777 45.613s-9.777 22.807 22.805 26.067c32.58 3.256 117.288-55.39 123.805-140.098 6.518-84.708-39.092-133.58-81.449-162.903z m-224.807-3.257c-6.511 0-84.708-3.261-94.48-94.486 3.255-87.968 87.968-94.48 94.48-97.741 6.517 0 91.23 9.773 94.486 97.74-9.774 91.227-87.969 94.487-94.486 94.487z m0 0M463.129 891.563c0 9.772-9.774 19.549-19.55 19.549-9.773 0-19.546-9.777-19.546-19.55v-94.481c0-9.777 9.773-19.55 19.546-19.55 9.776 0 19.55 9.773 19.55 19.55v94.482z m0 0M534.804 940.436c0 9.772-9.773 19.546-19.546 19.546-9.772 0-19.55-9.774-19.55-19.546V800.338c0-9.773 9.778-19.55 19.55-19.55 9.773 0 19.546 9.777 19.546 19.55v140.098z m0 0M599.966 868.756c0 9.774-9.772 19.55-19.546 19.55-9.776 0-19.549-9.776-19.549-19.55v-68.418c0-9.773 9.773-19.55 19.55-19.55 9.773 0 19.545 9.777 19.545 19.55v68.418z m0 0" fill="#d81e06" p-id="2357"></path></svg>
      </div>
    </el-backtop>
    <Footer />
  </div>
    
</template>

<script setup>
import { ArrowRight } from '@element-plus/icons-vue'
import Footer from '@/components/Footer/footer.vue'
import Header from '@/components/Header/Header.vue'
// import Home from '../Home/Home.vue'
import { ref, getCurrentInstance, reactive, onMounted } from 'vue'
import './index.scss'
import Myinfo from '@/components/Myinfo/Myinfo.vue'
import Newmessage from '@/components/Listitem/Newmessage.vue'
import Lables from '@/components/Listitem/Lables.vue'
import Siteinfo from '@/components/Listitem/Siteinfo.vue'
import Loading from '@/components/Loading/Loading.vue'
import $store from "@/store/index"
import { useRouter, useRoute } from 'vue-router'
const router = useRouter();
const route = useRoute()
const svg = `
    <path class="path" d="
      M 30 15
      L 28 17
      M 25.61 25.61
      A 15 15, 0, 0, 1, 15 30
      A 15 15, 0, 1, 1, 27.99 7.5
      L 15 15
    " style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"/>
  `
</script>

<style lang="scss">
.go_top_icon {
  svg {
    display: block;
    width: 90%;
    height: 90%;
    margin: 0 auto;
  }
}
.loading{
    height: 100vh;
    overflow: hidden;
}
.diasplayload{
    animation: loadanimal 0.5s forwards;
}
@keyframes loadanimal {
    100%{
        opacity: 0;
        margin-top: 100px;
        visibility: hidden;
    }
}
</style>