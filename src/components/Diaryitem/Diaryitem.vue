<template>
    <div class="diaryitem" v-if="initSuccess">
        <div class="diaryimg">
            <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Finews.gtimg.com%2Fnewsapp_match%2F0%2F10230779285%2F0.jpg&refer=http%3A%2F%2Finews.gtimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1639054216&t=06224b63c49bd5b2a8e08af37c645b7c" alt="">
        </div>
        
        <div class="diarybox">
            <div class="diaryboxarrow">
                <svg t="1642416728292" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3968" width="200" height="200"><path d="M735.208665 65.582671l-446.41733 446.417329 446.41733 446.417329z" p-id="3969"></path></svg>
            </div>
            <div class="diaryboxtop">
                <span class="boxtopleft">牛牛大作战</span>
                <span class="boxtopright">2021-02-26 17:15:41</span>
            </div>
            <div class="diaryboxcontent">就算你要在网吧登录，验证码必须到手机上查看，千万不要图省事在网吧的浏览器上打开邮箱查看信息，因为盗号的可以通过qqkey直接登录进入你的邮箱</div>
            <div class="diaryboxbottom">
                <div >
                    <svg @click="likeDiary" v-if="!isLike" t="1642318635700" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2916" width="200" height="200"><path d="M621.674667 408.021333c16.618667-74.24 28.224-127.936 34.837333-161.194666C673.152 163.093333 629.941333 85.333333 544.298667 85.333333c-77.226667 0-116.010667 38.378667-138.88 115.093334l-0.586667 2.24c-13.728 62.058667-34.72 110.165333-62.506667 144.586666a158.261333 158.261333 0 0 1-119.733333 58.965334l-21.909333 0.469333C148.437333 407.808 106.666667 450.816 106.666667 503.498667V821.333333c0 64.8 52.106667 117.333333 116.394666 117.333334h412.522667c84.736 0 160.373333-53.568 189.12-133.92l85.696-239.584c21.802667-60.96-9.536-128.202667-70.005333-150.186667a115.552 115.552 0 0 0-39.488-6.954667H621.674667zM544.256 149.333333c39.253333 0 59.498667 36.48 49.888 84.928-7.573333 38.144-21.984 104.426667-43.221333 198.666667-4.512 20.021333 10.56 39.093333 30.912 39.093333h218.666666c6.101333 0 12.16 1.066667 17.909334 3.168 27.445333 9.984 41.674667 40.554667 31.776 68.266667l-85.568 239.573333C744.981333 838.026667 693.301333 874.666667 635.402667 874.666667H223.498667C194.314667 874.666667 170.666667 850.784 170.666667 821.333333V503.498667c0-17.866667 14.144-32.448 31.829333-32.821334l21.866667-0.469333a221.12 221.12 0 0 0 167.381333-82.56c34.346667-42.602667 59.146667-99.306667 74.869333-169.877333C482.101333 166.336 499.552 149.333333 544.266667 149.333333z" p-id="2917" ></path></svg>
                    <svg @click="likeDiary" v-else t="1642319679335" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2769" width="200" height="200"><path d="M621.674667 408.021333c16.618667-74.24 28.224-127.936 34.837333-161.194666C673.152 163.093333 629.941333 85.333333 544.298667 85.333333c-77.226667 0-116.010667 38.378667-138.88 115.093334l-0.586667 2.24c-13.728 62.058667-34.72 110.165333-62.506667 144.586666a158.261333 158.261333 0 0 1-119.733333 58.965334l-21.909333 0.469333C148.437333 407.808 106.666667 450.816 106.666667 503.498667V821.333333c0 64.8 52.106667 117.333333 116.394666 117.333334h412.522667c84.736 0 160.373333-53.568 189.12-133.92l85.696-239.584c21.802667-60.96-9.536-128.202667-70.005333-150.186667a115.552 115.552 0 0 0-39.488-6.954667H621.674667z" p-id="2770"></path></svg>                    20
                </div>
                <div @click="router.push('/display/mydiarycontent')">
                    <svg t="1642318889691" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7071" width="200" height="200"><path d="M823.466667 110.933333H200.533333C136.533333 110.933333 85.333333 162.133333 85.333333 226.133333v452.266667c0 64 51.2 119.466667 115.2 119.466667H298.666667l42.666666 102.4c8.533333 21.333333 38.4 25.6 51.2 4.266666l76.8-106.666666h349.866667c64 0 115.2-51.2 115.2-119.466667V226.133333c4.266667-64-46.933333-115.2-110.933333-115.2z m-554.666667 405.333334c-29.866667 0-51.2-25.6-51.2-55.466667 0-29.866667 25.6-55.466667 51.2-55.466667s51.2 25.6 51.2 55.466667c0 34.133333-21.333333 55.466667-51.2 55.466667z m243.2 0c-29.866667 0-51.2-25.6-51.2-55.466667 0-29.866667 25.6-55.466667 51.2-55.466667s51.2 25.6 51.2 55.466667c0 34.133333-21.333333 55.466667-51.2 55.466667z m243.2 0c-29.866667 0-51.2-25.6-51.2-55.466667 0-29.866667 25.6-55.466667 51.2-55.466667s51.2 25.6 51.2 55.466667c4.266667 34.133333-21.333333 55.466667-51.2 55.466667z" p-id="7072"></path></svg>    
                    100
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref,onMounted,defineProps} from 'vue';
import { useRouter } from 'vue-router'
const router = useRouter();
const isLike=ref(false)
let initSuccess=ref(false)
const props=defineProps({
    time: {
        required: false,
        default: 0
      }
})
function initSlot(){
    setTimeout(()=> {
        initSuccess.value = true;
    }, (Number(props.time || 0)));
}
function likeDiary(){
    isLike.value=!isLike.value
}
onMounted(()=>{
    initSlot()
})
</script>

<style lang="scss">
.diaryitem{
    margin-top: 20px;
    position: relative;
    .diaryimg{
        width: 50px;
        height: 50px;
        border-radius: 50%;
        overflow: hidden;
        position: absolute;
        left: -25px;
        cursor: pointer;
        transition: 0.5s;
        img{
            width: 100%;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%,-50%);
            transition: All 0.4s ease-in-out;
        }
        img:hover{
            width: 120%;
            
        }
    }
    .diaryimg:hover{
        transform: rotate(360deg);
        -webkit-transform: rotate(360deg);
        -moz-transform: rotate(360deg);
        -o-transform: rotate(360deg);
        -ms-transform: rotate(360deg);
    }
    .diarybox{
        min-height: 60px;
        border-radius: 5px;
        padding:5px 10px;
        // border:1px solid rgb(185, 185, 185);
        margin-left: 40px;
        background: rgb(245, 245, 245);
        position: relative;
        animation:showdiaryitembox 1s forwards;
        transform: translate3d();
        // transition: 3s;
        .diaryboxtop{
            height: 30px;
            line-height: 40px;
            border-bottom:1px solid white;
            display: flex;
            justify-content: space-between;
            .boxtopleft{
                font-weight: 500;
                font-size: 15px;
                color: black;
                cursor: pointer;
                color: #303133;
                white-space:nowrap;
            }
            .boxtopright{
                height:30px;
                display: inline-block;
                float: right;
                margin-right: 0;
                color: #98a6ad;
                font-size: 12px;
                white-space:nowrap;
            }
        }
        .diaryboxcontent{
            width: 100%;
            overflow: hidden;
            word-wrap: normal;
            margin-top: 10px;
            border-bottom: 1px solid white;
            padding-bottom: 5px;
            color: #303133;
            // opacity: 0;
            animation: showtext 5s forwards;
        }
        .diaryboxbottom{
            margin-top: 5px;
            display: flex;
            justify-content: flex-end;
            div{
                display: flex;
                align-items: center;
                cursor: pointer;
                color: #999999;
                width: 60px;
                user-select: none;
                svg{
                    width:20px;
                    height: 20px;
                    fill:#999999;
                    transition: 0.3s;
                    margin-right: 3px;
                }
                svg:hover{
                    fill:#7a7a7a;
                }
            }
        }
        .diaryboxarrow{
            position: absolute;
            left: -20px;
            top: 0px;
            svg{
                width: 30px;
                height: 30px;
                fill:rgb(245, 245, 245)
            }
        }
    }
    
}
@keyframes showdiaryitembox {
        0%{
            opacity: 0;
            top: -200px;
            left: 200px;
        }
        100%{
            opacity: 1;
            top: 0px;
            left: 0px;
        }
}
@keyframes showtext {
    // 0%{
    //     opacity: 0;
    // }
    // 99%{
    //     color: rgba($color: #000000, $alpha: 0);
    // }
    // 100%{
    //     color: rgba($color: #000000, $alpha: 1.0);
    // }
}
</style>