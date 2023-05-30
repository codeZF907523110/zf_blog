<!--
 * @Author: your name
 * @Date: 2022-02-22 10:16:06
 * @LastEditTime: 2023-05-25 19:27:05
 * @LastEditors: zhangfeng16 907523110@qq.com
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /zf_blog/zfblog/src/App.vue
-->
<template>
  <div class='homeback'>
      <!-- <img src="./assets/img/homeback.jpg" alt=""> -->
  </div>
  <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" :key="route.fullPath" />
    </keep-alive>
  </router-view>
</template>

<script setup>
import { onActivated, onMounted } from "@vue/runtime-core"
import { useRouter, useRoute } from 'vue-router'
const router = useRouter();
const route = useRoute()
onActivated(() => {
  window.scroll({
    top: 0,
    behavior: "smooth"
  })
})
</script>

<style lang='scss'>
  body{
    margin: 0;
    padding: 0;
    color: #303133;
    background: #c7c9cc!important;
    font-family: '微软雅黑'!important;
  }
  .homeback{
        width: 100%;
        position: fixed;
        top: 0;
        z-index: -1;
        // height: 100vh;
        // border:1px solid red;
        img{
            width: 100%;
            // height: 100%;
            position: fixed;
        }
    }
</style>
