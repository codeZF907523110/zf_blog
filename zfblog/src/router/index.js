import { createRouter,createWebHashHistory} from "vue-router";
const display = () => import("../pages/Display/display.vue")
const home=()=> import("../pages/Home/Home.vue") 
const technology=()=> import("../pages/Technology/Technology.vue")
const messageboard=()=> import("../pages/Messageboard/MessageBoard.vue")
const writearticle=()=> import("../pages/WriteArticle/WriteArticle.vue")
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
      path:'/studynotes',
      component:studynotes
    }
]
const router = createRouter({
    history: createWebHashHistory(),
    routes
});
export default router;