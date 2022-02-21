<template>
    <div class="comment" v-if="initSuccess">
        <div class="commentleft">
            <div class="commenttx">
                <img src="https://upload.jianshu.io/users/upload_avatars/27245066/94fc4d6d-e3f7-4c01-9a31-7896766f1f94.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/80/h/80/format/webp" alt="">
            </div>
        </div>
        <div class="commentright">
            <div class="bloggercomment">
                <div style="font-size:15px;cursor: pointer;display:inline-block;margin-top:-5px">胖哥读点书</div>
                <div style="font-size:12px;color: #969696;margin-top:3px">1楼 2021.11.28 15:27</div>
                <div class="commentcontent">关于结婚，普遍存在着一种认知，在二十七八岁，一定要完成结婚这件事，就算是稍微晚一点，也一定要赶在三十岁之前，将婚姻大事落实。</div>
                <div class='itemactive'>
                    <span class='spans'><svg t="1636444918853" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2445" ><path d="M857.28 344.992h-264.832c12.576-44.256 18.944-83.584 18.944-118.208 0-78.56-71.808-153.792-140.544-143.808-60.608 8.8-89.536 59.904-89.536 125.536v59.296c0 76.064-58.208 140.928-132.224 148.064l-117.728-0.192A67.36 67.36 0 0 0 64 483.04V872c0 37.216 30.144 67.36 67.36 67.36h652.192a102.72 102.72 0 0 0 100.928-83.584l73.728-388.96a102.72 102.72 0 0 0-100.928-121.824zM128 872V483.04c0-1.856 1.504-3.36 3.36-3.36H208v395.68H131.36A3.36 3.36 0 0 1 128 872z m767.328-417.088l-73.728 388.96a38.72 38.72 0 0 1-38.048 31.488H272V476.864a213.312 213.312 0 0 0 173.312-209.088V208.512c0-37.568 12.064-58.912 34.72-62.176 27.04-3.936 67.36 38.336 67.36 80.48 0 37.312-9.504 84-28.864 139.712a32 32 0 0 0 30.24 42.496h308.512a38.72 38.72 0 0 1 38.048 45.888z" p-id="2446"></path></svg>20</span>
                    <span class='spans' @click="showcommentarea" style="margin-left:20px"><svg t="1636445025701" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4830" ><path d="M512 61.44c248.832 0 450.56 201.728 450.56 450.56 0 91.62752-27.36128 176.86528-74.3424 248.0128l31.5392 94.6176a40.96 40.96 0 0 1-46.8992 53.10464l-109.32224-21.87264A448.47104 448.47104 0 0 1 512 962.56C263.168 962.56 61.44 760.832 61.44 512S263.168 61.44 512 61.44z m0 61.44C297.10336 122.88 122.88 297.10336 122.88 512s174.22336 389.12 389.12 389.12c75.42784 0 147.49696-21.44256 209.5104-61.1328l7.68-5.05856 21.25824-14.336 99.84 19.968-29.7984-89.47712 16.46592-24.94464A386.9696 386.9696 0 0 0 901.12 512c0-214.89664-174.22336-389.12-389.12-389.12zM276.48 440.32a71.68 71.68 0 1 1 0 143.36 71.68 71.68 0 0 1 0-143.36z m235.52 0a71.68 71.68 0 1 1 0 143.36 71.68 71.68 0 0 1 0-143.36z m235.52 0a71.68 71.68 0 1 1 0 143.36 71.68 71.68 0 0 1 0-143.36z" p-id="4831"></path></svg>回复</span>
                </div>
            </div>
            <div class="userscomment" v-for="item in 1" :key="item.id">
                <div class="userscommenttop">
                    <div class="uctopleft">
                        <img src="https://upload.jianshu.io/users/upload_avatars/4798434/30157477-70aa-4480-8a90-2ec147bd9930.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/80/h/80/format/webp" alt="">
                    </div>
                    <div class="uctopright">
                        <div style="font-size:15px;cursor: pointer;display:inline-block;margin-top:-5px">四维谦君 <span style="font-size: 12px;color: #ec7259;border: 1px solid #ec7259;padding: 0 2px;border-radius: 4px;">作者</span></div>
                        <div style="font-size:12px;color: #969696;margin-top:3px">2021.12.20 22:19</div>
                    </div>
                </div>
                <div class="usercommentbottom">
                    <div class="ucbottomcontent">文友问起我最喜爱的作家，这个问题还真难排个名。不过，在我熟知的作家中，鲁迅毫无疑问地占据着主导位置。</div>
                    <div class='itemactive'>
                        <span class='spans' @click="showcommentarea" style="margin-top:5px"><svg t="1636445025701" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4830" ><path d="M512 61.44c248.832 0 450.56 201.728 450.56 450.56 0 91.62752-27.36128 176.86528-74.3424 248.0128l31.5392 94.6176a40.96 40.96 0 0 1-46.8992 53.10464l-109.32224-21.87264A448.47104 448.47104 0 0 1 512 962.56C263.168 962.56 61.44 760.832 61.44 512S263.168 61.44 512 61.44z m0 61.44C297.10336 122.88 122.88 297.10336 122.88 512s174.22336 389.12 389.12 389.12c75.42784 0 147.49696-21.44256 209.5104-61.1328l7.68-5.05856 21.25824-14.336 99.84 19.968-29.7984-89.47712 16.46592-24.94464A386.9696 386.9696 0 0 0 901.12 512c0-214.89664-174.22336-389.12-389.12-389.12zM276.48 440.32a71.68 71.68 0 1 1 0 143.36 71.68 71.68 0 0 1 0-143.36z m235.52 0a71.68 71.68 0 1 1 0 143.36 71.68 71.68 0 0 1 0-143.36z m235.52 0a71.68 71.68 0 1 1 0 143.36 71.68 71.68 0 0 1 0-143.36z" p-id="4831"></path></svg>回复</span>
                    </div>  
                </div>
            </div>
            <div class="replyarea" style="margin-top:10px" :class="{showcommentarea:isshowcommentarea}">
                <div>
                    <a-textarea style="resize:none" :maxlength='Number(100)'  placeholder="回复" :rows="4" />
                </div>
                <div class="replyareaactive">
                    <span class='cimg'><SmileOutlined style="margin-right:5px" />表情</span>
                    <div class="replyareabtn" style="right:70px">发布</div>
                    <div class="replyareabtn" @click="noshowcommentarea">取消</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref,reactive,defineProps,onMounted } from 'vue';
import  {SmileOutlined,PictureOutlined} from '@ant-design/icons-vue';
var isshowcommentarea=ref(false)
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
function showcommentarea(){
    isshowcommentarea.value=true
}
function noshowcommentarea(){
    isshowcommentarea.value=false
}
onMounted(()=>{
    initSlot()
})
</script>

<style lang="scss">
.comment{
    display: flex;
    margin-top: 20px;
    
    .commentleft{
        .commenttx{
            width: 40px;
            height: 40px;
            overflow: hidden;
            border-radius: 50%;
            margin-right: 10px;
            position: relative;
            cursor: pointer;
            img{
                width: 100%;
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
            }
            
        }
    }

    .commentright{
        animation: showcomment 1.5s forwards;
        animation-timing-function: ease-in;
        overflow: hidden;
        .bloggercomment{
            padding-bottom: 5px;
            border-bottom: 1px solid #e9e9e9;
            .commentcontent{
                margin-top: 10px;
                font-size: 16px;
                line-height: 1.5;
                word-break: break-word;
            }
        }
        .userscomment{
            margin-top: 10px;
            border-bottom: 1px solid #e9e9e9;
            padding-bottom: 5px;
            .userscommenttop{
                .uctopleft{
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    overflow: hidden;
                    position: relative;
                    float: left;
                    img{
                        width: 100%;
                        position: absolute;
                        top: 50%;
                        transform: translateY(-50%);
                    }
                }
            }
            .usercommentbottom{
                .ucbottomcontent{
                    margin-top: 10px;
                    font-size: 16px;
                    line-height: 1.5;
                    word-break: break-word;
                }
            }
        }
        .itemactive{
            .spans{
                height: 30px;
                line-height: 30px;
                font-size: 13px;
                cursor: pointer;
                color: #b0b0b0;
                transition: 0.3s;
                svg{
                    width: 16px;
                    height: 16px;
                    margin-right: 5px;
                    position: relative;
                    top: 3px;
                    fill:#b0b0b0;
                    transition: 0.3s;
                }
                
            }
            .spans:first-child:hover svg{
                fill:#ea6f5a
            }
            .spans:last-child:hover{
                color:  #303133
            }
            .spans:last-child:hover svg{
                fill: #303133
            }
        }
        .showcommentarea{
            height:140px!important;
        }
        .replyarea{
            height: 0px;
            overflow: hidden;
            transition: 0.3s;
            .replyareaactive{
                height: 30px;
                line-height: 40px;
                position: relative;
                .cimg{
                    color: #b0b0b0;
                    cursor: pointer;
                    transition: 0.3s;
                    
                }
                .cimg:hover{
                    color:#303133 ;
                }
                .replyareabtn{
                    width: 54px;
                    height: 100%;
                    text-align: center;
                    line-height: 28px;
                    background:#ec7259 ;
                    color: white;
                    border-radius: 50px;
                    position: absolute;
                    top: 0;
                    margin-top: 10px;
                    cursor: pointer;
                    font-size: 13px;
                    transition: 0.3s;
                }
                
                .replyareabtn:last-child{
                    right: 0;
                    background: white;
                    border: 1px solid #999;
                    color: #999;
                    width: 52px;
                }
                .replyareabtn:last-child:hover{
                    background: rgb(243, 243, 243);
                }
            }
        }
        
    }
    
}
@keyframes showcomment {
    0%{
        max-height: 50px;
        overflow: hidden;
    }
    30%{
        max-height: 50px;
        overflow: hidden;
    }
    100%{
        max-height: 500px;
    }
}
</style>