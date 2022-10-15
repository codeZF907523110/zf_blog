<!--
 * @Author: your name
 * @Date: 2022-02-22 11:39:44
 * @LastEditTime: 2022-02-22 11:59:09
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /zf_blog/zfblog/src/pages/WriteArticle/WriteHome.vue
-->
<template>
    <div class="writeHome">
        <el-row class="tac">
            <el-col :span="12">
            <el-menu
                active-text-color="#ffd04b"
                background-color="#545c64"
                class="el-menu-vertical-demo"
                default-active="2"
                text-color="#fff"
                @open="handleOpen"
                @close="handleClose"
            >
                <el-menu-item index="4">
                    <el-icon><setting /></el-icon>
                    <span>我的草稿</span>
                </el-menu-item>
            </el-menu>
            </el-col>
        </el-row>
    </div>
</template>

<script setup>
import {
  Location,
  Document,
  Menu as IconMenu,
  Setting,
} from '@element-plus/icons-vue'
const handleOpen = (key, keyPath) => {
  console.log(key, keyPath)
}
const handleClose = (key, keyPath) => {
  console.log(key, keyPath)
}
</script>

<style lang="scss">
.writeHome{
    width:1200px;
    min-height: 100vh;
    background: #fff;
    margin: 0 auto;
}
</style>