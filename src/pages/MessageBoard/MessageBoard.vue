<!--
 * @Author: zhangfeng16 zhangfeng16@shuidi-inc.com
 * @Date: 2022-12-20 14:51:37
 * @LastEditors: zhangfeng16 907523110@qq.com
 * @LastEditTime: 2023-05-24 17:24:21
 * @FilePath: /zf-blog/src/pages/Messageboard/MessageBoard.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->


<template>
  <div class="messageboard">
    <div class="commentarea">
      <div class="headportrait">
        <img
          :src="userIcon"
          alt=""
        />
      </div>
      <div class="areaboard">
        <div>
          <el-input
            v-model="content"
            type="textarea"
            style="resize: none"
            :maxlength="Number(100)"
            placeholder="吐槽一下吧!!!"
            :rows="4"
          />
        </div>

        <div class="commentactive">
          <Emoji @changeText="changeText">
            <template #reference>
              <span class="cimg">
                <svg t="1684227537190" class="icon_e" viewBox="0 0 1026 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2456" width="200" height="200"><path d="M495.465 830.665c-187.138 0-264.948-168.222-268.193-175.401l62.966-28.307c2.486 5.49 62.207 134.667 205.194 134.667 153.067-1.795 211.302-129.213 213.685-134.633l63.103 27.996c-3.141 7.077-79.054 173.364-273.13 175.643l-3.625 0.034zM500.16 991.221c-256.974 0-466.034-209.060-466.034-466.034s209.060-466.034 466.034-466.034 466.034 209.060 466.034 466.034-209.060 466.034-466.034 466.034zM500.16 128.196c-218.897 0-396.991 178.094-396.991 396.991s178.094 396.991 396.991 396.991 396.991-178.094 396.991-396.991-178.059-396.991-396.991-396.991zM311.088 444.27c0 29.689 24.062 53.818 53.818 53.818s53.818-24.096 53.818-53.818-24.062-53.818-53.818-53.818-53.818 24.096-53.818 53.818zM580.765 444.27c0 29.689 24.062 53.818 53.818 53.818s53.818-24.096 53.818-53.818-24.062-53.818-53.818-53.818-53.818 24.096-53.818 53.818z" fill="#a0a0a0" p-id="2457"></path></svg>
                表情
              </span>
            </template>
          </Emoji>
          <!-- <span class='cimg commentimg'><Picture class="icon_e" />图片</span> -->
          <el-button class="active_message_btn" color="#38393b" :disabled="content===''" @click="setMessage">发布留言</el-button>
        </div>
      </div>
    </div>
    <div class="allmessage">
      <div class="allmessagecenter">
        <div class="allmessagetitle">
          <div
            style="
              float: left;
              background-color: #ea6f5a;
              width: 3px;
              height: 18px;
              margin-right: 5px;
            "
          ></div>
          精彩{{ isMessage ? "留言" : "评论" }}
          <!-- <span style="font-size:15px">20</span> -->
        </div>
        <Comment
          v-for="(item, index) in messageList"
          :key="index"
          :isMessage="isMessage"
          :time="index * 150"
          :commentItem="item"
          @getMessages="getMessages"
        />
      </div>
    </div>
    <!-- <Footer></Footer> -->
  </div>
</template>
<script setup>
import { ref, onActivated, onMounted } from "vue";
import "./index.scss";
import Comment from "@/components/Comment/Comment.vue";
import $store from "@/store/index";
import dayjs from "dayjs";
import { useRoute } from "vue-router";
import Emoji from "@/components/Emoji/index.vue";
import api from '@/api/index'
import VueCookies from 'vue-cookies'
import defaultImg from '@/assets/img/defaultImg.jpeg'

const route = useRoute();
const messageList = ref([]); // 留言列表
const content = ref(""); //要留言的内容
const articleId = ref("");

const userIcon = ref('')

const props = defineProps({
  isMessage: {
    type: Boolean,
    default: true,
  },
});

const emit = defineEmits(["addCommentNum"]);

// 获取留言
const getMessages = async () => {
  const { result } = await api.blog.getMessages({
    isMessage: props.isMessage,
    articleId: articleId.value,
  });
  messageList.value = result;
};

// 留言
const setMessage = async () => {
  await api.blog.setMessage({
    content: content.value,
    isMessage: props.isMessage,
    articleId: articleId.value,
    createTime: dayjs(new Date().getTime()).format("YYYY-MM-DD"),
    userHeadPicture: VueCookies.get('icon') || '',
    userName: VueCookies.get('user') || ''
  });
  content.value = "";
  emit("addCommentNum");
  getMessages();
};

// 增加表情
const changeText = (char) => {
  content.value += char
}
onMounted(() => {
  userIcon.value = VueCookies.get('icon') || defaultImg
})
onActivated(() => {
  articleId.value = route.query.id;
  getMessages();
  setTimeout(() => {
    $store.state.isloading = false;
  }, 1000);
});
</script>
<style scoped>
.icons-list .anticon {
  margin-right: 6px;
  font-size: 24px;
}
</style>
