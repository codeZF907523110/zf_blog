<!--
 * @Author: zhangfeng16 907523110@qq.com
 * @Date: 2023-05-16 16:00:39
 * @LastEditors: zhangfeng16 907523110@qq.com
 * @LastEditTime: 2023-05-22 14:18:09
 * @FilePath: /zf_blog/src/components/Emoji/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="chatIcon">
    <el-popover popper-class="biaoqing" placement="top" :width="400" trigger="hover">
      <template #reference>
        <slot name="reference" />
      </template>
      <div class="emotionList">
        <span @click="getEmo(index)" v-for="(item,index) in appData" :key="index" class="emotionItem">{{item.char}}</span>
      </div>
    </el-popover>
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import appData from "./appData.ts"
const emojiItem = ref(0)
const emit = defineEmits(['changeText'])
const getEmo = (index) => {
  emojiItem.value = index
  emit('changeText', appData[index].char)

}
</script>
<style scoped>
.emotionSelect {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.emotionSelect img {
  width: 14px;
  height: 14px;
}
.chatIcon {
  padding: 0 10px;
}
.emotionList {
    display: flex;
    flex-wrap: wrap;
    padding: 5px;
}
.emotionItem {
  width: 10%;
  height: 36px;
  line-height: 36px;
  font-size: 20px;
  text-align: center;
  cursor: pointer;
  transition: .5s;
}
.emotionItem:hover {
  background: rgb(231, 231, 231);
}
/*包含以下四种的链接*/
.emotionItem {
    text-decoration: none;
}
/*正常的未被访问过的链接*/
.emotionItem:link {
    text-decoration: none;
}
/*已经访问过的链接*/
.emotionItem:visited {
    text-decoration: none;
}
/*鼠标划过(停留)的链接*/
.emotionItem:hover {
    text-decoration: none;
}
/* 正在点击的链接*/
.emotionItem:active {
    text-decoration: none;
}
</style>