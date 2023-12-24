<template>
    <div class='my_infos'>
        <video class='my_info_back' src="https://img-baofun.zhhainiao.com/market/133/b99b51e6c7945c9d5565861d397451cb_preview.mp4" autoplay muted loop></video>
        <div class='my_info'>
            <div class='head_portrait'>
                <img src="@/assets/img/defaultImg.jpeg" alt="">
            </div>
            <div class='myName'><span>{{ userInfo.userName }}</span> </div>
            <div class='mySpeak'>{{ userInfo.signature }}</div>
            <div class='call_me'>关注我</div>
            <div class='article_active'>
                <div class='active_item'>
                    <span>{{ userInfo.articlesNumber }}</span>
                    <div>文章</div>
                </div>
                <div class='active_item'>
                    <span>{{ userInfo.messageNumber }}</span>
                    <div>留言</div>
                </div>
                <div class='active_item'>
                    <span>10000</span>
                    <div>浏览</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
// import { getUserInfo } from "@/plugins/getUserInfo"
import { onMounted, reactive, ref } from "vue"
import { USER_INFO } from "@/plugins/getUserInfo.ts"

const userInfo = ref({})

onMounted(async () => {
  userInfo.value = USER_INFO()
});
</script>

<style lang='scss'>
    .my_infos{
        width: 100%;
        height: 380px;
        background: white;
        position: relative;
        animation: show_my_infos 0.5s forwards;
        .my_info_back{
            width: 100%;
            overflow: hidden;
            // border:1px solid red;
            img{
                width: 100%;
            }
        }
    .my_info{
        position: relative;
        
        .head_portrait{
            width: 80px;
            height: 80px;
            border-radius: 50%;
            position: absolute;
            left: 50%;
            top: -50px;
            transform: translate(-50%);
            cursor: pointer;
            overflow: hidden;
            border:5px solid rgba($color: #818181, $alpha: 0.1);
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
            transition: 0.3s;
            img{
                height: 100%;
                transition: 0.3s;
            }
        }
        .head_portrait:hover{
            width: 90px;
            height: 90px;
            
        }
        .head_portrait:hover img{
            transform: rotate(360deg);
        }
        .myName{
            padding-top: 50px;
            font-size: 18px;
            color: #a0a0a0;
            transition: 0.5s;
            width: 50px;
            margin: 0 auto;
        }
        .myName:hover{
            transform: scale(1.1);
            color: black;
            transition: 0.5s;
            
        }
        .mySpeak{
            margin-top:3px;
        }
        .myName,.mySpeak{
            text-align: center;
            cursor: pointer;
        }
        .call_me{
            font-size: 16px;
            width: 200px;
            height: 40px;
            line-height: 40px;
            text-align: center;
            background: #303133;
            color: #E4E7ED;
            margin: 10px auto;
            cursor: pointer;
            // margin-top: 10px;
            border-radius: 5px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
            transition: 0.3s;
        }
        .call_me:hover{
            background: black;
            transition: 0.3s;
            color: white;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
        }
        .article_active{
            width: 100%;
            display: flex;
            justify-content: space-around;
            .active_item{
                width: 50px;
                text-align: center;
                cursor: pointer;
                span{
                    font-size: 16px;
                    font-weight: 600;
                }
            }
        }
    }

    }
    @keyframes show_my_infos {
        0%{
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