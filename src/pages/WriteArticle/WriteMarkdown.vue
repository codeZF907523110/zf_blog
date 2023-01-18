<!--
 * @Author: your name
 * @Date: 2022-02-22 10:57:02
 * @LastEditTime: 2023-01-10 17:34:18
 * @LastEditors: zhangfeng16 zhangfeng16@shuidi-inc.com
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /zf_blog/zfblog/src/pages/WriteArticle/WriteMarkdown.vue
-->
<template>
    <div class="writeMarkdown">
        <md-editor class="md-editor" v-model="text" />
        <save-article :text="text" />
    </div>
</template>
<script setup>
import { ref,reactive,onMounted, watch} from 'vue'
import MdEditor from 'md-editor-v3'
import 'md-editor-v3/lib/style.css'
import SaveArticle from './components/saveArticle.vue'

let text=ref('')
watch(text,(newVal,oldVal)=>{
    console.log(newVal+":==="+oldVal)
})
</script>
<style lang="scss">
.writeMarkdown{
    height: 100vh;
    .md-editor{
        height: calc(100% - 65px);
    }
}
</style>