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
                              <el-input style="resize:none" :rows="4" :maxlength='Number(100)' type="textarea" placeholder="吐槽一下张峰这个小可爱吧!!!" ></el-input>
                            </div>
                            
                            <div class='commentactive'>
                                <Emoji>
                                  <template #reference>
                                    <span class="cimg">
                                      <svg t="1684227537190" class="icon_e" viewBox="0 0 1026 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2456" width="200" height="200"><path d="M495.465 830.665c-187.138 0-264.948-168.222-268.193-175.401l62.966-28.307c2.486 5.49 62.207 134.667 205.194 134.667 153.067-1.795 211.302-129.213 213.685-134.633l63.103 27.996c-3.141 7.077-79.054 173.364-273.13 175.643l-3.625 0.034zM500.16 991.221c-256.974 0-466.034-209.060-466.034-466.034s209.060-466.034 466.034-466.034 466.034 209.060 466.034 466.034-209.060 466.034-466.034 466.034zM500.16 128.196c-218.897 0-396.991 178.094-396.991 396.991s178.094 396.991 396.991 396.991 396.991-178.094 396.991-396.991-178.059-396.991-396.991-396.991zM311.088 444.27c0 29.689 24.062 53.818 53.818 53.818s53.818-24.096 53.818-53.818-24.062-53.818-53.818-53.818-53.818 24.096-53.818 53.818zM580.765 444.27c0 29.689 24.062 53.818 53.818 53.818s53.818-24.096 53.818-53.818-24.062-53.818-53.818-53.818-53.818 24.096-53.818 53.818z" fill="#a0a0a0" p-id="2457"></path></svg>
                                      表情
                                    </span>
                                  </template>
                                </Emoji>
                                <span class='cimg commentimg'><Picture class="icon_e" />图片</span>
                                <div class="active_message_btn">发布留言</div>
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
                        <!-- <Comment v-for="item in 10" :key="item.id"></Comment> -->
                    </div>
                </div>
                <!-- <Footer></Footer> -->
            </div>
        </div>

    </div>
</template>

<script setup>
import { ref,reactive,onMounted} from 'vue';
import Comment from '@/components/Comment/Comment.vue';
import Emoji from "@/components/Emoji/index.vue";
import $store from "@/store/index";
import './index.scss'
import Diaryitem from '@/components/Diaryitem/Diaryitem.vue';
onMounted(()=>{
    setTimeout(() => {
        $store.state.isloading=false
    }, 1000);
})
</script>

<style>

</style>