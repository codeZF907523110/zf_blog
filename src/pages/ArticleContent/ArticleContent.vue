<template>
  <div class="articlecontent">
    <div class="contentcenter">
      <div class="contenttitle">{{ blogItem.title }}</div>
      <div class="articleinfotop">
        <div class="articlelable">
          <svg
            t="1642323881117"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="7822"
            width="200"
            height="200"
          >
            <path
              d="M853.333333 1024l-341.333333-273.066667-341.333333 273.066667V0h682.666666v1024z"
              p-id="7823"
            ></path>
          </svg>
          <div class="labletext">{{ blogItem.articleType }}</div>
        </div>
        <div class="articletitles">
          <span class="titlename">分类专栏：</span>
          <span class="titleitemname">{{ blogItem.classifiedColumn }}</span>
          <span class="titlename" style="margin-right: 10px">文章标签：</span>
          <span
            class="titleitemname"
            v-for="(item, index) in blogItem.labels"
            :key="index"
            >{{ item }}</span
          >
        </div>

        <div class="articleinfo">
          <span>{{ blogItem.releaseTime }}</span>
          <!-- <span>&nbsp;&nbsp;字数 1,841</span> -->
          <span>&nbsp;&nbsp;阅读 {{ blogItem.openNum }}</span>
        </div>
      </div>
      <div class="contentcover">
        <img
          class="contentcoverimg"
          :src="blogItem.coverUrl"
          alt=""
        />
      </div>
      <div class="covertext">image</div>
      <div class="contenttext" v-html="mdContent" />
    </div>
    <div class="articlemore">
      <div class="authorinfo">
        <!-- <div class="authortx">
                  <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Finews.gtimg.com%2Fnewsapp_match%2F0%2F10230779285%2F0.jpg&refer=http%3A%2F%2Finews.gtimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1639054216&t=06224b63c49bd5b2a8e08af37c645b7c" alt="">
              </div> -->
        <span class="authorname">牛牛大作战</span>
      </div>
      <div class="articleactive">
        <div @click="likeArticle">
          <svg
            v-if="!isLike"
            t="1642318635700"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="2916"
            width="200"
            height="200"
          >
            <path
              d="M621.674667 408.021333c16.618667-74.24 28.224-127.936 34.837333-161.194666C673.152 163.093333 629.941333 85.333333 544.298667 85.333333c-77.226667 0-116.010667 38.378667-138.88 115.093334l-0.586667 2.24c-13.728 62.058667-34.72 110.165333-62.506667 144.586666a158.261333 158.261333 0 0 1-119.733333 58.965334l-21.909333 0.469333C148.437333 407.808 106.666667 450.816 106.666667 503.498667V821.333333c0 64.8 52.106667 117.333333 116.394666 117.333334h412.522667c84.736 0 160.373333-53.568 189.12-133.92l85.696-239.584c21.802667-60.96-9.536-128.202667-70.005333-150.186667a115.552 115.552 0 0 0-39.488-6.954667H621.674667zM544.256 149.333333c39.253333 0 59.498667 36.48 49.888 84.928-7.573333 38.144-21.984 104.426667-43.221333 198.666667-4.512 20.021333 10.56 39.093333 30.912 39.093333h218.666666c6.101333 0 12.16 1.066667 17.909334 3.168 27.445333 9.984 41.674667 40.554667 31.776 68.266667l-85.568 239.573333C744.981333 838.026667 693.301333 874.666667 635.402667 874.666667H223.498667C194.314667 874.666667 170.666667 850.784 170.666667 821.333333V503.498667c0-17.866667 14.144-32.448 31.829333-32.821334l21.866667-0.469333a221.12 221.12 0 0 0 167.381333-82.56c34.346667-42.602667 59.146667-99.306667 74.869333-169.877333C482.101333 166.336 499.552 149.333333 544.266667 149.333333z"
              p-id="2917"
            ></path>
          </svg>
          <svg
            v-else
            t="1642319679335"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="2769"
            width="200"
            height="200"
          >
            <path
              d="M621.674667 408.021333c16.618667-74.24 28.224-127.936 34.837333-161.194666C673.152 163.093333 629.941333 85.333333 544.298667 85.333333c-77.226667 0-116.010667 38.378667-138.88 115.093334l-0.586667 2.24c-13.728 62.058667-34.72 110.165333-62.506667 144.586666a158.261333 158.261333 0 0 1-119.733333 58.965334l-21.909333 0.469333C148.437333 407.808 106.666667 450.816 106.666667 503.498667V821.333333c0 64.8 52.106667 117.333333 116.394666 117.333334h412.522667c84.736 0 160.373333-53.568 189.12-133.92l85.696-239.584c21.802667-60.96-9.536-128.202667-70.005333-150.186667a115.552 115.552 0 0 0-39.488-6.954667H621.674667z"
              p-id="2770"
            ></path>
          </svg>
          <span>{{ blogItem.likePeople ? blogItem.likePeople.length : 0 }}</span>
        </div>
        <div @click="goComment">
          <svg
            t="1642318889691"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="7071"
            width="200"
            height="200"
          >
            <path
              d="M823.466667 110.933333H200.533333C136.533333 110.933333 85.333333 162.133333 85.333333 226.133333v452.266667c0 64 51.2 119.466667 115.2 119.466667H298.666667l42.666666 102.4c8.533333 21.333333 38.4 25.6 51.2 4.266666l76.8-106.666666h349.866667c64 0 115.2-51.2 115.2-119.466667V226.133333c4.266667-64-46.933333-115.2-110.933333-115.2z m-554.666667 405.333334c-29.866667 0-51.2-25.6-51.2-55.466667 0-29.866667 25.6-55.466667 51.2-55.466667s51.2 25.6 51.2 55.466667c0 34.133333-21.333333 55.466667-51.2 55.466667z m243.2 0c-29.866667 0-51.2-25.6-51.2-55.466667 0-29.866667 25.6-55.466667 51.2-55.466667s51.2 25.6 51.2 55.466667c0 34.133333-21.333333 55.466667-51.2 55.466667z m243.2 0c-29.866667 0-51.2-25.6-51.2-55.466667 0-29.866667 25.6-55.466667 51.2-55.466667s51.2 25.6 51.2 55.466667c4.266667 34.133333-21.333333 55.466667-51.2 55.466667z"
              p-id="7072"
            ></path>
          </svg>
          <span>{{ blogItem.commentNum }}</span>
        </div>
        <div @click="isShowReward = true">
          <svg
            t="1642319395885"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="10044"
            width="200"
            height="200"
          >
            <path
              d="M828.326957 1005.746087H195.673043a84.635826 84.635826 0 0 1-59.65913-24.553739A83.545043 83.545043 0 0 1 111.304348 921.911652V167.624348c240.484174 167.624348 560.90713 167.624348 801.391304 0v754.287304c0 22.238609-8.904348 43.564522-24.709565 59.280696a84.635826 84.635826 0 0 1-59.65913 24.531478z m-168.69287-293.754435h-126.553044v-84.057043h126.553044v-42.073044h-126.553044v-12.55513l124.66087-124.215652-29.540174-29.473392-115.97913 115.689739-117.470609-116.24626-29.740522 29.696 125.907479 124.816695v12.399305h-126.553044v42.050782h126.553044v84.057044h-126.553044v42.050782h126.553044v83.968h42.162086v-84.057043h126.553044v-42.050783zM111.304348 104.759652v-20.947478C111.304348 37.509565 149.081043 0 195.673043 0h632.653914c22.394435 0 43.853913 8.837565 59.65913 24.553739A83.545043 83.545043 0 0 1 912.695652 83.812174v20.947478s-169.138087 146.67687-400.272695 146.67687C280.442435 251.436522 111.304348 104.759652 111.304348 104.759652z"
              p-id="10045"
            ></path>
          </svg>
        </div>
        <div>
          <svg
            t="1642318817226"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="5731"
            width="200"
            height="200"
          >
            <path
              d="M928.760301 1024H95.239699A95.239699 95.239699 0 0 1 0 928.760301V95.239699A95.239699 95.239699 0 0 1 95.239699 0h833.520602A95.239699 95.239699 0 0 1 1024 95.239699v833.520602A95.239699 95.239699 0 0 1 928.760301 1024zM440.140351 493.881103l171.55208-87.822757a15.937444 15.937444 0 0 1 16.810025 1.411529C700.246617 461.274787 764.79198 412.705363 764.79198 412.705363c77.467268-56.089023 41.229474-137.585564 41.229474-137.585564-40.639198-91.313083-129.97614-69.909173-139.869675-67.201604a16.681704 16.681704 0 0 0-1.629674 0.538948c-72.693734 28.076591-79.623058 91.749373-79.558897 115.950677a16.0401 16.0401 0 0 1-8.661654 14.359097L409.343358 424.741855a16.129925 16.129925 0 0 1-17.759599-1.950477c-53.894737-45.245915-114.000201-20.531328-114.0002-20.531328-75.927419 27.640301-75.927419 103.208421-75.927419 103.208421 0 89.824561 77.672581 112.716992 77.672582 112.716993 56.62797 16.476391 95.047218-7.083308 110.35589-19.466266a16.014436 16.014436 0 0 1 17.233483-1.886316L576.160401 681.383459a16.117093 16.117093 0 0 1 8.854135 14.667067c-0.859749 76.209724 56.114687 104.106667 56.114687 104.106667C740.411028 850.766917 796.525714 762.995489 796.525714 762.995489c52.73985-85.12802-19.312281-146.81183-27.383659-153.317695-0.436291-0.346466-0.885414-0.6801-1.283208-0.98807-66.303358-43.500752-120.621554-11.317895-139.767017 3.400502a16.001604 16.001604 0 0 1-16.861354 1.629674l-170.923308-84.897043a15.988772 15.988772 0 0 1-8.8798-14.654235v-5.620452a15.963108 15.963108 0 0 1 8.712983-14.667067z"
              p-id="5732"
            ></path>
          </svg>
        </div>
      </div>
    </div>
    <!-- 评论区 -->
    <div id="comment">
       <message-board
        class="message-board"
        :isMessage="false"
        :articleId="blogItem._id"
        @addCommentNum="addCommentNum"
      />
    </div>
  </div>
  <!-- 打赏 -->
  <div
    class="reward"
    :class="{ showreward: isShowReward }"
    @click="isShowReward = false"
  >
    <div class="rewardbox" @click.stop :class="{ showrewardbox: isShowReward }">
      <div class="closerewardbox" @click="isShowReward = false">
        <svg
          t="1642407617128"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="4617"
          width="200"
          height="200"
        >
          <path
            d="M927.435322 1006.57265l-415.903813-415.903814L95.627695 1006.57265a56.013982 56.013982 0 1 1-79.20377-79.231777l415.903814-415.875807L16.423925 95.58926A56.013982 56.013982 0 0 1 95.627695 16.357483l415.903814 415.903813L927.435322 16.357483a55.985975 55.985975 0 1 1 79.175763 79.231777L590.763286 511.465066l415.847799 415.875807a55.985975 55.985975 0 1 1-79.175763 79.231777z"
            p-id="4618"
          ></path>
        </svg>
      </div>
      <div class="rewardboxcenter">
        <div class="rewardtitle">打赏作者</div>
        <div class="rewardmoney">
          <div
            v-for="(item, index) in moneyBtn"
            :key="item.id"
            @click="changeColor(index)"
            :class="{ changerewardbtn: isChangeColor == index }"
          >
            {{ item }}
          </div>
          <!-- <div>￥5</div>
            <div>￥10</div>
            <div>￥20</div>
            <div>￥50</div>
            <div>自定义</div> -->
        </div>
        <div class="rewardmessage">
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="给他留言..."
          ></textarea>
        </div>
        <div class="rewardmethod">
          <div style="font-size: 15px; margin: 12px 0">选择支付方式</div>
          <div class="rewardmethodbtn">
            <div @click="payWay = true" :class="{ changerewardbtn: payWay }">
              <svg
                t="1642406735107"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="2989"
                width="200"
                height="200"
              >
                <path
                  d="M395.846 603.585c-3.921 1.98-7.936 2.925-12.81 2.925-10.9 0-19.791-5.85-24.764-14.625l-2.006-3.864-78.106-167.913c-0.956-1.98-0.956-3.865-0.956-5.845 0-7.83 5.928-13.68 13.863-13.68 2.965 0 5.928 0.944 8.893 2.924l91.965 64.43c6.884 3.864 14.82 6.79 23.708 6.79 4.972 0 9.85-0.945 14.822-2.926L861.71 282.479c-77.149-89.804-204.684-148.384-349.135-148.384-235.371 0-427.242 157.158-427.242 351.294 0 105.368 57.361 201.017 147.323 265.447 6.88 4.905 11.852 13.68 11.852 22.45 0 2.925-0.957 5.85-2.006 8.775-6.881 26.318-18.831 69.334-18.831 71.223-0.958 2.92-2.013 6.79-2.013 10.75 0 7.83 5.929 13.68 13.865 13.68 2.963 0 5.928-0.944 7.935-2.925l92.922-53.674c6.885-3.87 14.82-6.794 22.756-6.794 3.916 0 8.889 0.944 12.81 1.98 43.496 12.644 91.012 19.53 139.48 19.53 235.372 0 427.24-157.158 427.24-351.294 0-58.58-17.78-114.143-48.467-163.003l-491.39 280.07-2.963 1.98z"
                  fill="#09BB07"
                  p-id="2990"
                ></path>
              </svg>
              微信支付
            </div>
            <div @click="payWay = false" :class="{ changerewardbtn: !payWay }">
              <svg
                t="1642406820094"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="3816"
                width="200"
                height="200"
              >
                <path
                  d="M975.238095 679.375238l-297.374476-100.132571a575.683048 575.683048 0 0 0 47.835429-101.61981 544.889905 544.889905 0 0 0 28.379428-104.594286l-192.78019-1.487238v-65.755428l233.130666-1.487238v-46.32381H559.786667V151.868952h-115.053715v106.105905H226.57219v46.32381l218.185143-1.487238v70.217142h-174.835809v37.351619h360.131047a392.996571 392.996571 0 0 1-17.944381 67.242667c-13.433905 37.351619-28.379429 70.241524-28.379428 70.241524s-168.862476-59.782095-258.511238-59.782095-195.754667 35.888762-206.214095 140.483047c-10.48381 103.107048 49.298286 159.890286 135.972571 179.321905a340.041143 340.041143 0 0 0 234.617905-34.377143 553.74019 553.74019 0 0 0 135.972571-110.592l346.453334 168.740572a0.365714 0.365714 0 0 1 0.195047 0.390095A170.276571 170.276571 0 0 1 803.401143 975.238095H200.874667A152.112762 152.112762 0 0 1 48.761905 823.125333V200.899048A152.112762 152.112762 0 0 1 200.874667 48.761905H823.100952A152.112762 152.112762 0 0 1 975.238095 200.874667z m-433.347047-58.270476s-107.593143 129.999238-233.106286 129.999238-152.429714-61.269333-152.429714-106.105905 26.89219-92.647619 132.998095-100.10819c107.593143-5.973333 252.537905 76.214857 252.537905 76.214857z m0 0"
                  fill="#02A9F1"
                  p-id="3817"
                ></path>
              </svg>
              支付宝
            </div>
          </div>
        </div>
        <div class="rewardbtn">确认支付</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter, useRoute } from "vue-router"
import { ref, reactive, onMounted, getCurrentInstance, onActivated } from "vue"
import { SmileOutlined, PictureOutlined } from "@ant-design/icons-vue"
import Newmessage from "@/components/Listitem/Newmessage.vue"
import Lables from "@/components/Listitem/Lables.vue"
import Siteinfo from "@/components/Listitem/Siteinfo.vue"
import Comment from "@/components/Comment/Comment.vue"
import $store from "@/store/index"
import MessageBoard from "../MessageBoard/MessageBoard.vue"
import "./index.scss"
import { marked } from "marked"
// 代码高亮
import hljs from 'highlight.js'
// 自选代码高亮样式
import 'highlight.js/scss/atom-one-dark.scss'

// marked设置
const rendererMD = new marked.Renderer();
marked.setOptions({
  highlight(code) {
    return hljs.highlightAuto(code).value
  },
  renderer: rendererMD
})

import Axios from 'axios'
const route = useRoute()

const moneyBtn = ["￥2", "￥5", "￥10", "￥20", "￥50", "自定义"]
const isLike = ref(false) //是否点赞
const sortStyle = ref(true) //排序
const isChangeColor = ref(0)
const payWay = ref(true)
const isShowReward = ref(false)
const _id = ref('')
const api = getCurrentInstance()?.appContext.config.globalProperties.$api
const blogItem = reactive({}) //博客内容
const mdContent = ref("") //markdown内容

const changeColor = (index) => {
  isChangeColor.value = index
}

// 增加留言数
const addCommentNum = () => {
  blogItem.commentNum ++
}
// 跳转到评论区
const goComment = () => {
  const divTop = document.getElementById('comment').offsetTop+110
  window.scroll({
    top: divTop,
    behavior: "smooth"
  })
}

// 点赞
const likeArticle = async () => {
  await api.blog.giveALike({_id: blogItem._id})
  isLike.value = !isLike.value
}

// 增加阅读量
const addOpenNum = async () => {
  await api.blog.addOpenNum({
    _id: _id.value,
    openNum: blogItem.openNum
  })
}
const changeSort = (index) => {
  if (index == 0) {
    sortStyle.value = true
  } else {
    sortStyle.value = false
  }
}

const getAllBlog = async () => {
  const { result } = await api.blog.getAllBlog({
    _id: _id.value,
  })
  Object.assign(blogItem, result[0])
  const content = await Axios.get(blogItem.blogUrl)
  mdContent.value = marked(content.data)
}
onActivated(async () => {
  window.scroll({
    top: 0,
    behavior: "smooth"
  })
  _id.value = route.query.id
  await getAllBlog()
  await addOpenNum()
  setTimeout(() => {
    $store.state.isloading = false;
  }, 1000)
})
</script>

<style scoped>
.message-board {
  margin-top: -30px;
}
:deep(pre) {
  width: 100%;
  background: #282c34;
  color: #a9b7c6;
  padding: 20px;
  border-radius: 8px;
}
</style>