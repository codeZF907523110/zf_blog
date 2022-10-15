<!--
 * @Author: 流觞曲水 907523110@qq.com
 * @Date: 2022-10-15 20:30:45
 * @LastEditors: 流觞曲水 907523110@qq.com
 * @LastEditTime: 2022-10-15 20:46:20
 * @FilePath: /zf-blog/src/pages/Technology/Technology.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class='technology'>
      <div class="classification">
        <div class="ifications" v-for="(item,index) in labels" :key="item.id" :class="{changeifications:ischangeific===index}" @click="ischangeific=index">{{item}}</div>
      </div>
      <div class='allalticle'>
          <div class='list' v-for="(item,index) in count" :key="index">
            <Listitem :time="index*100"></Listitem>
          </div>
          <!-- <div class='paging'>
            <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
          </div> -->
      </div>
    <!-- <Footer></Footer> -->
  </div>
</template>
<script setup>
import { ref,reactive,onMounted} from 'vue';
import './index.scss'
import  {} from '@ant-design/icons-vue';
import Myinfo from '../../components/Myinfo/Myinfo.vue'
import Newmessage from '../../components/Listitem/Newmessage.vue';
import Lables from '../../components/Listitem/Lables.vue';
import Siteinfo from '../../components/Listitem/Siteinfo.vue';
import Listitem from '../../components/Listitem/Listitem.vue'
import Footer from '../../components/Footer/footer.vue';
import $store from "../../store/index";
const count = ref(18) 
const labels=['推介','前端','服务端','HTML','CSS','JavaScript','Vue','React','NodeJs','Java','Golang','.net','python','PHP','C','C++','MySql','MongoDB','架构','区块链','运维','安全','云计算/大数据','人工智能']
const sorts=['全部','最新','最热']
let ischangeific=ref(0)
const divheight=ref(50);

function changewidth(){
  (divheight.value==50)?(divheight.value=100):(divheight.value=50)
}
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
