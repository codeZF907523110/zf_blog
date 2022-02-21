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
const routerpath=router.currentRoute.value.path
onMounted(()=>{
    
    setTimeout(() => {
        $store.state.isloading=false
    }, 1000);
})
</script>

<style>

</style>