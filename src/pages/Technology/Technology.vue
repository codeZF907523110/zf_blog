<!--
 * @Author: 流觞曲水 907523110@qq.com
 * @Date: 2022-10-15 20:30:45
 * @LastEditors: zhangfeng16 907523110@qq.com
 * @LastEditTime: 2023-05-16 16:46:53
 * @FilePath: /zf-blog/src/pages/Technology/Technology.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class='technology'>
    <div class="classification">
      <div
        class="ifications"
        v-for="(item,index) in labels"
        :key="index"
        :class="{changeifications:isChange===item.name}"
        @click="changeItem(item.name, index)"
      >
        {{item.name}}
      </div>
    </div>
    <div class='all_alticle'>
      <div class='list_item'>
        <div v-if="blogList.length">
          <Listitem
            v-for="(item,index) in blogList"
            :key="index" :time="index*100"
            :blogItem="item"
            @changeItem="changeItem"
          />
        </div>
        <el-skeleton class="el_skeleton" v-else :rows="6" animated />
      </div>
      <el-pagination
        v-model:currentPage="pageNum"
        v-model:page-size="pageSize"
        :page-sizes="[10, 20, 50, 100]"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
        @size-change="getAllBlog"
        @current-change="getAllBlog"
      />
    </div>
  </div>
</template>
<script setup>
import { ref, reactive, getCurrentInstance, onActivated, onMounted} from 'vue'
import { useRouter, useRoute } from 'vue-router'
import './index.scss'
import Listitem from '@components/Listitem/Listitem.vue'
import $store from "@/store/index"
const api = getCurrentInstance()?.appContext.config.globalProperties.$api
const router = useRouter()
const route = useRoute()
const pageNum = ref(1)
const pageSize = ref(20)
const total = ref(0)
const count = ref(18)
const labels = ref([])
const sorts=['全部','最新','最热']
const isChange=ref('')
const divHeight=ref(50)
const blogList = ref([]) //博客列表

// 点击左侧标签
const changeItem = async (label) => {
  isChange.value = label
  await router.push(`/display/technology?label=${label}`)
  await getAllBlog()
}
// 条件查询博客
const getAllBlog = async () => {
  const labels = route.query.label !== '全部' ? route.query.label : null
  const data = await api.blog.getAllBlog({
    labels,
    pageNum: pageNum.value,
    pageSize: pageSize.value
  })
  blogList.value = data.result
  total.value = data.total
}
// 获取标签列表
const getLabels = async (parentLevel) => {
  const { result } = await api.blog.getLabels({ parentLevel })
  labels.value = result
  labels.value.unshift({ name: '全部' })
}
onActivated(()=>{
  isChange.value = route.query.label
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
.el_skeleton {
  padding: 20px;
}
.el-pagination {
  display: flex;
  justify-content: center;
  margin-top: 10px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 20px;
}
</style>
