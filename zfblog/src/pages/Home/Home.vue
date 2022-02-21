<template>

  <div class='home'>
        <div class='updatetitle'>最近更新
          <span>更多>></span>
        </div>
        <Listitem v-for="(item,index) in count" :key="index" :time="index*100"></Listitem>
        <div class='updatetitle'>我的随笔
          <span>更多>></span>
        </div>
        <Listitem v-for="(item,index) in count" :key="index" :time="(index+4)*100"></Listitem>
        <div class='updatetitle'>技术专区
          <span>更多>></span>
        </div>
        <Listitem v-for="(item,index) in count" :key="index" :time="(index+8)*100"></Listitem>
        <div class='updatetitle'>相册
          <span>更多>></span>
        </div>
        <Listitem v-for="(item,index) in count" :key="index" :time="(index+12)*100"></Listitem>
  </div>
  
</template>
<script setup>
  import { ref,reactive ,onMounted} from 'vue';
  import './index.scss'
  import Listitem from '../../components/Listitem/Listitem.vue';
  import Myinfo from '../../components/Myinfo/Myinfo.vue'
  import Newmessage from '../../components/Listitem/Newmessage.vue';
  import Lables from '../../components/Listitem/Lables.vue';
  import Siteinfo from '../../components/Listitem/Siteinfo.vue';
  import $store from "../../store/index";
  
  const count = ref(4) 
  const current = ref(['1']);
  onMounted(()=>{
      setTimeout(() => {
          $store.state.isloading=false
      }, 1000);
  })
</script>
<style scoped>
.icons-list .anticon {
  margin-right: 6px;
  font-size: 24px;
}
</style>
