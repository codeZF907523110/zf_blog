<!--
 * @Author: zhangfeng16 907523110@qq.com
 * @Date: 2023-05-15 18:36:42
 * @LastEditors: zhangfeng16 907523110@qq.com
 * @LastEditTime: 2023-05-16 19:27:16
 * @FilePath: /zf_blog/src/components/Loading/Loading.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div class="loading"
      v-loading="$store.state.isloading"
      element-loading-text="Loading..."
      :element-loading-spinner="svg"
      element-loading-svg-view-box="-10, -10, 50, 50"
      element-loading-background="rgba(122, 122, 122, 0.8)"
    />
</template>

<script setup>
import $store from "@/store/index"
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
.loading{
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,0.5);
    position: absolute;
    top: 0;
    z-index: 1000;
    overflow: hidden;
    // .load{
    //     position: absolute;
    //     left: 50%;
    //     top: 50%;
    //     transform: translate(-50%,-50%);
    // }
    // .ant-spin{
    //     color: white;
    // }
    // .ant-spin-dot-item{
    //     background: white;
    // }
}
</style>