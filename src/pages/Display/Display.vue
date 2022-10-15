<template>
    <div class='display' :class="{loading:$store.state.isloading}">
        <Header></Header>
        
        <Loading :class="{diasplayload:!$store.state.isloading}"></Loading>
        <div class='alticle' >
            <div class='alticleleft'>
                <div class='thisrouter' v-if="routerpath!='/display/home'">
                    <el-breadcrumb separator=">">
                        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                        <el-breadcrumb-item>技术专区</el-breadcrumb-item>
                    </el-breadcrumb>
                </div>
                <router-view></router-view>
            </div>
            <div class='alticleright'>
                <Myinfo></Myinfo>
                <Siteinfo style="margin-top:10px"></Siteinfo>
                <Newmessage style="margin-top:10px"></Newmessage>
                <Lables style="margin-top:10px"></Lables>
            </div>
        </div>
        <a-back-top />
        <Footer></Footer>

    </div>
    
</template>

<script setup>
import Footer from '../../components/Footer/footer.vue'
import Header from '../../components/Header/Header.vue'
// import Home from '../Home/Home.vue'
import { ref,reactive, onMounted, watch } from 'vue';
import './index.scss'
import  {} from '@ant-design/icons-vue';
import Listitem from '../../components/Listitem/Listitem.vue';
import Myinfo from '../../components/Myinfo/Myinfo.vue'
import Newmessage from '../../components/Listitem/Newmessage.vue';
import Lables from '../../components/Listitem/Lables.vue';
import Siteinfo from '../../components/Listitem/Siteinfo.vue';
import Loading from '../../components/Loading/Loading.vue'
import $store from "../../store/index";
import { useRouter,onBeforeRouteUpdate  } from 'vue-router'
const router = useRouter();
const routerpath=ref(router.currentRoute.value.path)
const count = ref(4) 
const current = ref(['1']);
var isloading=ref(true)

onBeforeRouteUpdate((to) => {
    routerpath.value=to.fullPath
    // console.log(to.fullPath, "=====");
});
onMounted(()=>{

})
</script>

<style>
.loading{
    height: 100vh;
    overflow: hidden;
}
.diasplayload{
    animation: loadanimal 0.5s forwards;
}
@keyframes loadanimal {
    100%{
        opacity: 0;
        margin-top: 100px;
        visibility: hidden;
    }
}
</style>