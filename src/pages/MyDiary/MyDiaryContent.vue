<template>
    <div class="mydiarycontent">
        <div class="diarycenter">
            <div class="diaryitemcontent">
                <Diaryitem></Diaryitem>
            </div>
            
            <div class='messageboard'>
                <div class='commentarea'>
                        <!-- <div class='headportrait'>
                            <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Finews.gtimg.com%2Fnewsapp_match%2F0%2F10230779285%2F0.jpg&refer=http%3A%2F%2Finews.gtimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1639054216&t=06224b63c49bd5b2a8e08af37c645b7c" alt="">
                        </div> -->
                        <div class='areaboard'>
                            <div>
                                <a-textarea style="resize:none" :maxlength='Number(100)'  placeholder="吐槽一下张峰这个小可爱吧!!!" :rows="4" />
                            </div>
                            
                            <div class='commentactive'>
                                <span class='cimg'><SmileOutlined />表情</span>
                                <span class='cimg commentimg'><PictureOutlined />图片</span>
                                <div>发布留言</div>
                            </div>
                        </div>
                        
                </div>
                <div class="allmessage">
                    <div class="allmessagecenter">
                        <div class="allmessagetitle">
                        <div style="float: left;background-color:#ea6f5a;width:3px;height:18px;margin-right: 5px;"></div>
                        精彩评论
                        <span style="font-size:15px">20</span>
                        </div>
                        <Comment v-for="item in 10" :key="item.id"></Comment>
                    </div>
                </div>
                <!-- <Footer></Footer> -->
            </div>
        </div>

    </div>
</template>

<script setup>
import { ref,reactive,onMounted} from 'vue';
import  {SmileOutlined,PictureOutlined} from '@ant-design/icons-vue';
import Newmessage from '../../components/Listitem/Newmessage.vue';
import Lables from '../../components/Listitem/Lables.vue';
import Siteinfo from '../../components/Listitem/Siteinfo.vue';
import Comment from '../../components/Comment/Comment.vue';
import $store from "../../store/index";
import './index.scss'
import Diaryitem from '../../components/Diaryitem/Diaryitem.vue';
onMounted(()=>{
    setTimeout(() => {
        $store.state.isloading=false
    }, 1000);
})
</script>

<style>

</style>