/*
 * @Author: your name
 * @Date: 2022-02-22 10:16:06
 * @LastEditTime: 2022-10-17 10:17:20
 * @LastEditors: 流觞曲水 907523110@qq.com
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /zf_blog/zfblog/src/router/index.js
 */
import { createRouter,createWebHashHistory} from "vue-router";
const display = () => import("@pages/Display/display.vue")
const home=()=> import("@pages/Home/Home.vue") 
const techNology=()=> import("@pages/techNology/techNology.vue")
const messageBoard=()=> import("@pages/messageBoard/messageBoard.vue")
const writeHome=()=> import("@pages/writeArticle/writeHome.vue")
const writeArticle=()=> import("@pages/writeArticle/writeArticle.vue")
const writeMarkdown=()=> import("@pages/writeArticle/writeMarkdown.vue")
const articleContent=()=>import("@pages/articleContent/articleContent.vue")
const myDiary=()=>import("@pages/myDiary/myDiary.vue")
const myDiaryContent=()=>import("@pages/myDiary/myDiaryContent.vue")
const studyNotes=()=>import("@pages/studyNotes/studyNotes.vue")
const routes = [
    {
      path:'/',
      redirect:'/display/home'
    },
    {
      path:'/display',
      component:display,
      children:[
        {
          path:'home',
          component:home
        },
        {
          path:'techNology',
          component:techNology
        },
        {
          path:'messageBoard',
          component:messageBoard
        },
        {
          path:'articleContent',
          component:articleContent
        },
        {
          path:'myDiary',
          component:myDiary
        },
        {
          path:'myDiaryContent',
          component:myDiaryContent
        }
      ]
    },
    {
      path:'/writeArticle',
      component:writeArticle
    },
    {
      path:'/writeMarkdown',
      component:writeMarkdown
    },
    {
      path:'/studyNotes',
      component:studyNotes
    }
]
const router = createRouter({
    history: createWebHashHistory(),
    routes
});
export default router;