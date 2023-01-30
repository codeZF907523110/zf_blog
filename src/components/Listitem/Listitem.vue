
<template>
  <div class='listitem' @click="router.push(`/display/articlecontent?id=${props.blogItem._id}`)" v-if="initSuccess">
    <div v-if="!contentLoad" style="display:flex">
      <el-skeleton animated>
          <template #template>
            <div style="display:flex;">
              <el-skeleton style="width:70%" />
              <el-skeleton-item variant="image" style="width: 170px; height: 110px;margin-left:70px;margin-top:10px" />
            </div>
          </template>
      </el-skeleton>
    </div>

    <div class='itemcenter' v-else>
        <div class='listtop'>
            <span class='itemtime'>{{ props.blogItem.releaseTime }}</span>
            <el-divider direction="vertical" />
            <span class='itemlable'>
              <span v-for="(item, index) in props.blogItem.labels" :key="index" @click.stop="emit('changeItem', item)">
                {{item}}
                <i v-if="index !== props.blogItem.labels.length-1">·</i>
              </span>
            </span>
        </div>
        <div class='listbottom'>
            <div class='listcenterleft'>
                <div class='itemtitle'>{{ props.blogItem.title }}</div>
                <div class='itemcontent'>{{ props.blogItem.abstract }}</div>
                <div class='itemactive'>
                    <span>
                      <svg t="1636446636962" class="icon" viewBox="0 0 1433 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5639" width="200" height="200"><path d="M716.8 307.2c-116.224 0-204.8 89.4976-204.8 204.8s89.4976 204.8 204.8 204.8 204.8-89.4976 204.8-204.8c0-116.224-97.792-204.8-204.8-204.8z m0 307.2c-58.368 0-102.4-44.032-102.4-102.4 0-58.368 44.032-102.4 102.4-102.4 58.368 0 102.4 44.032 102.4 102.4 0 50.7904-50.7904 102.4-102.4 102.4z" p-id="5640"></path><path d="M716.8 1024C313.9584 1024 20.48 561.5616 8.3968 542.1056a58.4704 58.4704 0 0 1 0-60.2112C20.48 462.4384 313.9584 0 716.8 0s696.32 462.4384 708.4032 481.8944a58.4704 58.4704 0 0 1 0 60.2112C1413.12 561.5616 1119.6416 1024 716.8 1024zM102.4 512c71.168 99.5328 317.1328 409.6 614.4 409.6s542.208-310.0672 614.4-409.6c-71.168-100.5568-317.1328-409.6-614.4-409.6C419.5328 101.376 174.592 411.4432 102.4 512z" p-id="5641"></path></svg>
                      {{ props.blogItem.openNum }}
                    </span>
                    <span class='spans'>
                      <svg t="1636444918853" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2445" ><path d="M857.28 344.992h-264.832c12.576-44.256 18.944-83.584 18.944-118.208 0-78.56-71.808-153.792-140.544-143.808-60.608 8.8-89.536 59.904-89.536 125.536v59.296c0 76.064-58.208 140.928-132.224 148.064l-117.728-0.192A67.36 67.36 0 0 0 64 483.04V872c0 37.216 30.144 67.36 67.36 67.36h652.192a102.72 102.72 0 0 0 100.928-83.584l73.728-388.96a102.72 102.72 0 0 0-100.928-121.824zM128 872V483.04c0-1.856 1.504-3.36 3.36-3.36H208v395.68H131.36A3.36 3.36 0 0 1 128 872z m767.328-417.088l-73.728 388.96a38.72 38.72 0 0 1-38.048 31.488H272V476.864a213.312 213.312 0 0 0 173.312-209.088V208.512c0-37.568 12.064-58.912 34.72-62.176 27.04-3.936 67.36 38.336 67.36 80.48 0 37.312-9.504 84-28.864 139.712a32 32 0 0 0 30.24 42.496h308.512a38.72 38.72 0 0 1 38.048 45.888z" p-id="2446"></path></svg>
                      <!-- {{ props.blogItem.likePeople.length }} -->
                    </span>
                    <span class='spans'><svg t="1636445025701" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4830" ><path d="M512 61.44c248.832 0 450.56 201.728 450.56 450.56 0 91.62752-27.36128 176.86528-74.3424 248.0128l31.5392 94.6176a40.96 40.96 0 0 1-46.8992 53.10464l-109.32224-21.87264A448.47104 448.47104 0 0 1 512 962.56C263.168 962.56 61.44 760.832 61.44 512S263.168 61.44 512 61.44z m0 61.44C297.10336 122.88 122.88 297.10336 122.88 512s174.22336 389.12 389.12 389.12c75.42784 0 147.49696-21.44256 209.5104-61.1328l7.68-5.05856 21.25824-14.336 99.84 19.968-29.7984-89.47712 16.46592-24.94464A386.9696 386.9696 0 0 0 901.12 512c0-214.89664-174.22336-389.12-389.12-389.12zM276.48 440.32a71.68 71.68 0 1 1 0 143.36 71.68 71.68 0 0 1 0-143.36z m235.52 0a71.68 71.68 0 1 1 0 143.36 71.68 71.68 0 0 1 0-143.36z m235.52 0a71.68 71.68 0 1 1 0 143.36 71.68 71.68 0 0 1 0-143.36z" p-id="4831"></path></svg>
                      {{ props.blogItem.commentNum }}
                    </span>
                </div>
            </div>
            <div class='listcenterright'>
                <div class="listtype">{{ props.blogItem.classifiedColumn }}</div>
                <img class="listitemimg" :src="props.blogItem.coverUrl" alt="">
            </div>
        </div>
    </div>
  </div>
</template>

<script setup>
import { ref,reactive, onMounted,defineProps } from 'vue';
import { useRouter } from 'vue-router'
var contentLoad=ref(true)
const initSuccess=ref(false)
const router = useRouter();
const props = defineProps({
  time: {
    required: false,
    default: 0
  },
  blogItem: {
    type: Object,
    default: () => {}
  }
})
const emit = defineEmits(['clickLabel'])

const initSlot = () => {
  setTimeout(()=> {
    initSuccess.value = true;
  }, (Number(props.time || 0)));
}

onMounted(()=>{
    initSlot()
})
</script>

<style lang="scss">
.listitem{
        width: 100%;
        height: 141px;
        cursor: pointer;
        // border:1px solid black;
        position: relative;
        border-bottom: 1px solid rgb(233, 233, 233);
        animation: showlistitem 1s forwards;
        animation-timing-function: ease-in;
        background: white;
        .itemcenter{
            width: 95%;
            height: 90%;
            // border:1px solid red;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
            font-size: 12px;
            .listtop{
                font-size: 13px;
                color:#86909c;
                .itemlable{
                    span{
                      margin-left: 5px;
                      transition: 0.3s;
                      i{
                        color: #86909c;
                      }
                    }
                    span:hover{
                      color:rgb(24, 144, 255);
                      transition: 0.3s;
                    }
                }
            }
            .listbottom{
                width: 100%;
                height: 97px;
                display: flex;
                margin-top: 10px;
                .listcenterleft{
                    flex: 1 1 auto;
                    .itemtitle{
                        font-weight: 700;
                        font-size: 16px;
                        line-height: 24px;
                        color: #1d2129;
                        width: 100%;
                        display: -webkit-box;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        -webkit-box-orient: vertical;
                        -webkit-line-clamp: 1;
                        margin-bottom: 8px;
                    }
                    .itemcontent{
                        color: #86909c;
                        font-size: 13px;
                        line-height: 22px;
                        display: -webkit-box;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        -webkit-box-orient: vertical;
                        -webkit-line-clamp: 1;
                    }
                }
                .listcenterright{
                    flex: 0 0 auto;
                    overflow: hidden;
                    width: 170px;
                    // border:1px solid red;
                    height: 110px;
                    border-radius: 5px;
                    position: relative;
                    top: -15px;
                    .listtype{
                        z-index: 1000;
                        position: absolute;
                        top: 0;
                        width: 60px;
                        height: 25px;
                        background-color: rgba($color: #000000, $alpha:0.3);
                        opacity: 0;
                        font-size: 12px;
                        text-align: center;
                        line-height: 27px;
                        color: white;
                        transition: 0.8s;
                    }
                    img{
                        height: 100%;
                        display: block;
                        position: absolute;
                        left: 50%;
                        top: 50%;
                        transform: translate(-50%,-50%);
                        transition: 0.5s;
                    }
                }
            }
            .itemactive{
                display: flex;
                width:180px;
                position: relative;
                justify-content: space-between;
                margin-top: 10px;
                span{
                    height: 100%;
                    height: 30px;
                    line-height: 30px;
                    font-size: 13px;
                    display: block;

                    svg{
                        width: 16px;
                        height: 16px;
                        margin-right: 5px;
                        // margin-top: 30px;
                        position: relative;
                        top: 3px;
                    }
                    
                }
                .spans:hover{
                    color:rgb(24, 144, 255);
                    svg{
                        fill:rgb(24, 144, 255)!important;
                        transition: 0.3s;
                    }
                }
            }
        }
        .ant-divider-horizontal{
            margin:0 auto!important;
        }
    }
.listitem:hover{
    transition: .3s;
    background-color: #f8f8f8;
    
}
.listitem:hover .listitemimg{
    height: 120%!important;
}
.listitem:hover .listtype{
    opacity: 1!important;
}
@keyframes showlistitem {
    0%{
        bottom: 100px;
        opacity: 0;
    }
    50%{
        bottom: 100px;
        opacity: 0;
    }
    100%{
        bottom: 0px;
        opacity: 1;
    }
}
</style>



