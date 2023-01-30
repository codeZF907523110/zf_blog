<!--
 * @Author: your name
 * @Date: 2022-02-22 10:16:06
 * @LastEditTime: 2023-01-29 16:38:13
 * @LastEditors: 流觞曲水 907523110@qq.com
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /zf_blog/zfblog/src/pages/Home/Home.vue
-->
<template>
  <div class='home'>
    <div class='updatetitle'>最近更新
      <span>更多>></span>
    </div>
    <Listitem v-for="(item,index) in count" :key="index" ></Listitem>
    <div class='updatetitle'>我的随笔
      <span>更多>></span>
    </div>
    <Listitem v-for="(item,index) in count" :key="index" ></Listitem>
    <div class='updatetitle'>技术专区
      <span>更多>></span>
    </div>
    <Listitem v-for="(item,index) in count" :key="index" ></Listitem>
    <div class='updatetitle'>相册
      <span>更多>></span>
    </div>
    <Listitem v-for="(item,index) in count" :key="index" ></Listitem>
  </div>
  
</template>
<script setup>
  import { ref,reactive ,onMounted, getCurrentInstance} from 'vue'
  import './index.scss'
  import Listitem from '../../components/Listitem/Listitem.vue'
  import Myinfo from '../../components/Myinfo/Myinfo.vue'
  import Newmessage from '../../components/Listitem/Newmessage.vue'
  import Lables from '../../components/Listitem/Lables.vue'
  import Siteinfo from '../../components/Listitem/Siteinfo.vue'
  import $store from "../../store/index"
  const api = getCurrentInstance()?.appContext.config.globalProperties.$api
  
  const count = ref(4) 
  const current = ref(['1'])
  onMounted(async ()=>{
    setTimeout(() => {
      $store.state.isloading=false
    }, 1000)
  })
</script>
<style scoped>
.icons-list .anticon {
  margin-right: 6px;
  font-size: 24px;
}
</style>
