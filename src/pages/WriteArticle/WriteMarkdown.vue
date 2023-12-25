<!--
 * @Author: your name
 * @Date: 2022-02-22 10:57:02
 * @LastEditTime: 2023-05-26 16:54:46
 * @LastEditors: zhangfeng16 907523110@qq.com
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /zf_blog/zfblog/src/pages/WriteArticle/WriteMarkdown.vue
-->
<template>
  <div class="writeMarkdown">
    <md-editor class="md-editor" v-model="text" />
    <save-article :text="text" :baseForm="blogItem" />
  </div>
</template>
<script lang="ts" setup>
import { ref, reactive, onMounted, watch, Ref } from "vue";
import MdEditor from "md-editor-v3";
import "md-editor-v3/lib/style.css";
import SaveArticle from "./components/saveArticle.vue";
import { useRouter, useRoute, RouteLocationNormalizedLoaded } from "vue-router";
import api from "@/api/index";
import Axios from "axios";

const route: RouteLocationNormalizedLoaded = useRoute();

const text: Ref<string> = ref("");

const _id: Ref<string | string[]> = ref("");

const blogItem = reactive({
  //博客内容
  likePeople: [],
});

const getAllBlog = async () => {
  const { result } = await api.blog.getAllBlog({
    _id: _id.value,
  });
  Object.assign(blogItem, result[0]);
  const content = await Axios.get(blogItem.blogUrl);
  text.value = content.data;
};

onMounted(() => {
  _id.value = route.query.id;
  if (_id.value) {
    getAllBlog();
  }
});
</script>
<style lang="scss">
.writeMarkdown {
  width: 100vw;
  height: 100vh;
  .md-editor {
    height: calc(100% - 65px);
  }
}
</style>
