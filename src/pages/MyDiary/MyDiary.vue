<!--
 * @Author: 流觞曲水 907523110@qq.com
 * @Date: 2022-10-15 20:30:45
 * @LastEditors: 流觞曲水 907523110@qq.com
 * @LastEditTime: 2022-10-15 20:45:38
 * @FilePath: /zf-blog/src/pages/MyDiary/MyDiary.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div class="mydiary">
        <div class="allmydiary">
            <Diaryitem v-for="(item,index) in 10" :time="index*100" :key="item.id">{{item}}</Diaryitem>
        </div>
        <div class='paging'>
            <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
        </div>
    </div>
</template>

<script setup>
import { ref,reactive,onMounted} from 'vue';
import $store from "../../store/index";
import { useRouter } from 'vue-router'
import Diaryitem from '../../components/Diaryitem/Diaryitem.vue';
import './index.scss'
const router = useRouter();
const routerPath=router.currentRoute.value.path
onMounted(()=>{
    
    setTimeout(() => {
        $store.state.isloading=false
    }, 1000);
})
</script>

<style>

</style>