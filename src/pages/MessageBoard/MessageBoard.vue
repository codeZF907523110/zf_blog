<!--
 * @Author: zhangfeng16 zhangfeng16@shuidi-inc.com
 * @Date: 2022-12-20 14:51:37
 * @LastEditors: zhangfeng16 907523110@qq.com
 * @LastEditTime: 2023-05-16 16:23:57
 * @FilePath: /zf-blog/src/pages/Messageboard/MessageBoard.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->


<template>
  <div class="messageboard">
    <div class="commentarea">
      <div class="headportrait">
        <img
          src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Finews.gtimg.com%2Fnewsapp_match%2F0%2F10230779285%2F0.jpg&refer=http%3A%2F%2Finews.gtimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1639054216&t=06224b63c49bd5b2a8e08af37c645b7c"
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
          <Emoji>
            <template #reference>
              <span class="cimg"><SmileOutlined />表情</span>
            </template>
          </Emoji>
          <span class='cimg commentimg'><PictureOutlined />图片</span>
          <div class="active_message_btn" @click="setMessage">发布留言</div>
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
import { ref, reactive, onMounted, getCurrentInstance, onActivated } from "vue";
import "./index.scss";
import { SmileOutlined, PictureOutlined } from "@ant-design/icons-vue";
import Newmessage from "@/components/Listitem/Newmessage.vue";
import Lables from "@/components/Listitem/Lables.vue";
import Siteinfo from "@/components/Listitem/Siteinfo.vue";
import Comment from "@/components/Comment/Comment.vue";
import $store from "@/store/index";
import dayjs from "dayjs";
import { useRoute } from "vue-router";
import Emoji from "@/components/Emoji/index.vue";

const route = useRoute();
const messageList = ref([]); // 留言列表
const content = ref(""); //要留言的内容
const api = getCurrentInstance()?.appContext.config.globalProperties.$api;
const articleId = ref("");

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
  });
  content.value = "";
  emit("addCommentNum");
  getMessages();
};

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
