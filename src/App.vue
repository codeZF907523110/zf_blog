<!--
 * @Author: your name
 * @Date: 2022-02-22 10:16:06
 * @LastEditTime: 2022-02-22 10:34:29
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /zf_blog/zfblog/src/App.vue
-->
<template>
  <div class='homeback'>
      <!-- <img src="./assets/img/homeback.jpg" alt=""> -->
  </div>
  <router-view></router-view>
</template>

<script>
export default {
  setup(){
    console.log('setup');
  }
}
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
