<!--
 * @Author: your name
 * @Date: 2022-02-22 10:16:06
 * @LastEditTime: 2023-01-12 17:18:43
 * @LastEditors: zhangfeng16 zhangfeng16@shuidi-inc.com
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /zf_blog/zfblog/src/App.vue
-->
<template>
  <div class='homeback'>
      <!-- <img src="./assets/img/homeback.jpg" alt=""> -->
  </div>
  <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" />
    </keep-alive>
  </router-view>
</template>

<script setup>
import { onActivated, onMounted } from "@vue/runtime-core"
onActivated(() => {
  window.scroll({
    top: 0,
    behavior: "smooth"
  })
})
</script>

<style lang='scss'>
  body{
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
