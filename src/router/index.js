import { createRouter, createWebHistory} from "vue-router"
import api from '../api/index'
const routes = [
    {
      path:'/',
      redirect:'/display/technology?label=全部'
    },
    {
      path:'/display',
      component: () => import('@pages/Display/Display.vue'),
      children:[
        {
          path:'home',
          component: () => import('@pages/Home/Home.vue')
        },
        {
          path: 'techNology',
          meta: {
            title: '技术专区',
            name: '技术专区'
          },
          component: () => import('@pages/Technology/Technology.vue')
        },
        {
          path: 'messageBoard',
          meta: {
            title: '留言板',
            name: '留言板'
          },
          component: () => import('@pages/MessageBoard/MessageBoard.vue')
        },
        {
          path:'articleContent',
          meta: {
              title: '技术专区'
          },
          component: () => import('@pages/ArticleContent/ArticleContent.vue')
        },
        {
          path:'myDiary',
          meta: {

          },
          component: () => import('@pages/MyDiary/MyDiary.vue')
        },
        {
          path:'myDiaryContent',
          component: () => import('@pages/MyDiary/MyDiaryContent.vue')
        }
      ]
    },
    {
      path:'/writeArticle',
      component: () => import('@pages/WriteArticle/WriteArticle.vue')
    },
    {
      path:'/writeMarkdown',
      component: () => import('@pages/WriteArticle/WriteMarkdown.vue')
    },
    {
      path:'/studyNotes',
      component: () => import('@pages/StudyNotes/StudyNotes.vue')
    }
]
const router = createRouter({
  history: createWebHistory('/'),
  routes,
})
router.beforeEach(async (to, from, next) => {
  console.log(to, 'to')
  const regex = /#access_token=([^&]+)&expires_in=([^&]+)/
  const match = to.hash.match(regex)
  if (match) {
    const access_token = match[1] // B58475245E7222D40FD7FCD682C6445B
    const expires_in = match[2] // 7776000
    await api.login.qqLogin({ access_token, expires_in })
    window.location.replace('http://www.zfblog.top/')
  }
  next()
})
export default router;