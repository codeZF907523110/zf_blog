<!--
 * @Author: zhangfeng16 zhangfeng16@shuidi-inc.com
 * @Date: 2022-12-20 14:51:37
 * @LastEditors: zhangfeng16 zhangfeng16@shuidi-inc.com
 * @LastEditTime: 2023-01-12 19:48:56
 * @FilePath: /pure-settlement1/src/components/Listitem/Lables.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div class='lables'>
        <div class='lablestop'>
            标签列表
        </div>
        <div class='mylable'>
            <el-tag
              v-for="(item, index) in labelList"
              :key="index"
              :color="rgb()"
            >
              {{ item.name }}
            </el-tag>
            <!-- <el-tag color="#ffff00">代码人生</el-tag>
            <el-tag color="#f50">网站</el-tag>
            <el-tag color="#2db7f5">睡前日记</el-tag>
            <el-tag color="#ff00ff">人生</el-tag>
            <el-tag color="#108ee9">爱情</el-tag>
             <el-tag color="#ccff00">心情日记</el-tag>
            <el-tag color="#66ffff">摄影</el-tag>
            <el-tag color="#cc9933">读书笔记</el-tag>
            <el-tag color="#87d068">成功</el-tag>
            <el-tag color="#66ff00">观影笔记</el-tag>
            <el-tag color="#0000ff">工作</el-tag>
            <el-tag color="#990099">面试经历</el-tag> -->
        </div>
    </div>
</template>

<script setup>
import { ref, getCurrentInstance, onActivated } from "vue";
const api = getCurrentInstance()?.appContext.config.globalProperties.$api
const labelList = ref([])

const rgb = () => {//rgb颜色随机
  const r = Math.floor(Math.random()*256);
  const g = Math.floor(Math.random()*256);
  const b = Math.floor(Math.random()*256);
  return `rgb(${r},${g},${b})`;
}

// 获取标签列表
const getLabels = async (parentLevel) => {
  const { result } = await api.blog.getLabels({ parentLevel })
  labelList.value = result
}
onActivated(() => {
  getLabels()
})
</script>

<style lang="scss" scoped>
    .lables{
        background: white;
        border: 1px solid rgb(235, 238, 245);
        animation: showmyinfos 1.7s forwards;
        position: relative;
        .lablestop{
            width: 100%;
            height:40px;
            background: #303133;
            color: white;
            line-height: 40px;
            font-size: 16px;
            padding-left: 10px;
        }
        .mylable{
            margin-top: 5px;
            margin-left: 5px;
            margin-bottom: 10px;
            .el-tag{
              cursor: pointer;
              color: white;
              border: none;
              margin: 5px 2px 0px 2px;
              transition: .3s;
              line-height: 32px;
            }
            .el-tag:hover{
              color: white;
              background: #303133!important;
            }
        }
    }
    @keyframes showmyinfos {
        0%{
            left: 100px;
            top: -100px;
            opacity: 0;
        }
        80%{
            left: 100px;
            top: -100px;
            opacity: 0;
        }
        100%{
            left: 0;
            top: 0;
            opacity: 1;
        }
    }
</style>