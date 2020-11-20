import Vue from 'vue'
import VueRouter from 'vue-router'
if (process.env.NODE_ENV === 'development') {
  Vue.use(VueRouter)
}

// 页面路由
const routes = [
  {
    path: '/home',
    name: 'HomePage',
    alias: '/', // 正式项目把别名去除掉
    component: () => import('@/views/home/index'),
    meta: {
      title: '视频监控'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: '/webpath/a/',
  routes
})

// GOOD
router.beforeEach((to, from, next) => {
  next()
})

export default router
