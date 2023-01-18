<!--
 * @Author: 流觞曲水 907523110@qq.com
 * @Date: 2022-10-15 20:30:45
 * @LastEditors: zhangfeng16 zhangfeng16@shuidi-inc.com
 * @LastEditTime: 2023-01-12 18:25:23
 * @FilePath: /zf-blog/src/pages/Technology/Technology.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class='technology'>
      <div class="classification">
        <div
          class="ifications"
          v-for="(item,index) in labels"
          :key="item.id"
          :class="{changeifications:isChange===index}"
          @click="changeItem(item.name, index)"
        >
          {{item.name}}
        </div>
      </div>
      <div class='allalticle'>
          <div class='list' v-for="(item,index) in blogList" :key="index">
            <Listitem :time="index*100" :blogItem="item"></Listitem>
          </div>
          <!-- <div class='paging'>
            <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
          </div> -->
      </div>
    <!-- <Footer></Footer> -->
  </div>
</template>
<script setup>
import { ref,reactive,onMounted,getCurrentInstance} from 'vue'
import './index.scss'
import  {} from '@ant-design/icons-vue'
import Myinfo from '@components/Myinfo/Myinfo.vue'
import Newmessage from '@components/Listitem/Newmessage.vue'
import Lables from '@components/Listitem/Lables.vue'
import Siteinfo from '@components/Listitem/Siteinfo.vue'
import Listitem from '@components/Listitem/Listitem.vue'
import Footer from '@components/Footer/footer.vue'
import $store from "@/store/index"
const api = getCurrentInstance()?.appContext.config.globalProperties.$api
const count = ref(18) 
const labels = ref([])
const sorts=['全部','最新','最热']
let isChange=ref(0)
const divHeight=ref(50)
const blogList = ref([]) //博客列表

const changeWidth = () => {
  divHeight.value = divHeight.value === 50 ? 100 : 50
}
// 
const changeItem = (label, index) => {
  isChange.value = index
  getAllBlog(label)
}
// 条件查询博客
const getAllBlog = async (label) => {
  const labels = label === '全部' ? null : label
  const { result } = await api.blog.getAllBlog({labels})
  blogList.value = result
}
// 获取标签列表
const getLabels = async (parentLevel) => {
  const { result } = await api.blog.getLabels({ parentLevel })
  labels.value = result
  labels.value.unshift({ name: '全部' })
}
onMounted(()=>{
  getAllBlog()
  getLabels()
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
