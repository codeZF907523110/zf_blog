/*
 * @Author: your name
 * @Date: 2022-02-22 10:16:06
 * @LastEditTime: 2022-02-22 15:07:45
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /zf_blog/zfblog/src/router/index.js
 */
import { createRouter,createWebHashHistory} from "vue-router";
const display = () => import("../pages/Display/display.vue")
const home=()=> import("../pages/Home/Home.vue") 
const technology=()=> import("../pages/Technology/Technology.vue")
const messageboard=()=> import("../pages/Messageboard/MessageBoard.vue")
const writearhome=()=> import("../pages/WriteArticle/WriteHome.vue")
const writearticle=()=> import("../pages/WriteArticle/WriteArticle.vue")
const writemarkdown=()=> import("../pages/WriteArticle/WriteMarkdown.vue")
const articlecontent=()=>import("../pages/ArticleContent/ArticleContent.vue")
const mydiary=()=>import("../pages/MyDiary/MyDiary.vue")
const mydiarycontent=()=>import("../pages/MyDiary/MyDiaryContent.vue")
const studynotes=()=>import("../pages/StudyNotes/StudyNotes.vue")
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
          path:'technology',
          component:technology
        },
        {
          path:'messageboard',
          component:messageboard
        },
        {
          path:'articlecontent',
          component:articlecontent
        },
        {
          path:'mydiary',
          component:mydiary
        },
        {
          path:'mydiarycontent',
          component:mydiarycontent
        }
      ]
    },
    {
      path:'/writearticle',
      component:writearticle
    },
    {
      path:'/writemarkdown',
      component:writemarkdown
    },
    {
      path:'/studynotes',
      component:studynotes
    }
]
const router = createRouter({
    history: createWebHashHistory(),
    routes
});
export default router;