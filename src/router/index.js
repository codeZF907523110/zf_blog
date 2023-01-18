/*
 * @Author: your name
 * @Date: 2022-02-22 10:16:06
 * @LastEditTime: 2023-01-11 15:14:58
 * @LastEditors: zhangfeng16 zhangfeng16@shuidi-inc.com
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /zf_blog/zfblog/src/router/index.js
 */
import { createRouter, createWebHistory} from "vue-router";
const routes = [
    {
      path:'/',
      redirect:'/display/home'
    },
    {
      path:'/display',
      component: () => import('../pages/Display/Display.vue'),
      children:[
        {
          path:'home',
          component: () => import('../pages/Home/Home.vue')
        },
        {
          path:'techNology',
          component: () => import('../pages/Technology/Technology.vue')
        },
        {
          path:'messageBoard',
          component: () => import('../pages/MessageBoard/MessageBoard.vue')
        },
        {
          path:'articleContent',
          component: () => import('../pages/ArticleContent/ArticleContent.vue')
        },
        {
          path:'myDiary',
          component: () => import('../pages/MyDiary/MyDiary.vue')
        },
        {
          path:'myDiaryContent',
          component: () => import('../pages/MyDiary/MyDiaryContent.vue')
        }
      ]
    },
    {
      path:'/writeArticle',
      component: () => import('../pages/WriteArticle/WriteArticle.vue')
    },
    {
      path:'/writeMarkdown',
      component: () => import('../pages/WriteArticle/WriteMarkdown.vue')
    },
    {
      path:'/studyNotes',
      component: () => import('../pages/StudyNotes/StudyNotes.vue')
    }
]
const router = createRouter({
  history: createWebHistory('/'),
  routes,
 })
export default router;