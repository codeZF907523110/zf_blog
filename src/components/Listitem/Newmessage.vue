<!--
 * @Author: zhangfeng16 zhangfeng16@shuidi-inc.com
 * @Date: 2022-12-20 14:51:37
 * @LastEditors: zhangfeng16 zhangfeng16@shuidi-inc.com
 * @LastEditTime: 2023-01-17 17:06:12
 * @FilePath: /pure-settlement1/src/components/Listitem/Newmessage.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div class='newmessage'>
        <div class='messagetop'>
            最新留言
        </div>
        <div class='messages'>
            <div v-for="(item, index) in newMessage" :key="index" @click="router.push('/display/messageboard')">
              {{ item.content }}
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, getCurrentInstance, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
const api = getCurrentInstance()?.appContext.config.globalProperties.$api
const newMessage = ref([])

const getNewMessage = async () => {
  const { result } = await api.userInfo.getNewMessage({})
  newMessage.value = result
}
onMounted(() => {
  getNewMessage()
})
</script>

<style lang="scss">
    .newmessage{
        background: white;
        border: 1px solid rgb(235, 238, 245);
        animation: showmyinfos 1.3s forwards;
        position: relative;
        .messagetop{
            width: 100%;
            height:40px;
            background: #303133;
            color: white;
            line-height: 40px;
            font-size: 16px;
            padding-left: 10px;
        }
        .messages{
            div{
                width: 92%;
                margin-left: 5px;
                border-bottom: 1px dashed #909399;
                height: 35px;
                font-size: 14px;
                line-height: 35px;
                color: #1d2129;
                display: -webkit-box;
                overflow: hidden;
                text-overflow: ellipsis;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 1;  
                cursor: pointer;
                color: rgb(160, 160, 160);
                transition: 0.3s; 
            }
            div:hover{
                  color:black;
                  transition: 0.3s;  
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