import { createRouter, createWebHistory } from 'vue-router'
import Charts from '../views/charts/Charts.vue'
import B from '../components/B.vue'
import C from '../components/C.vue'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { requiresAuth: true },
    children: [
      {
        path: '/Charts',
        name: 'Charts',
        component: Charts,
      },
      {
        path: '/B',
        name: 'B',
        component: B,
      },
      {
        path: '/C',
        name: 'C',
        component: C,
      },
    ]
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login,
  },
]


const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  // 获取用户的认证状态，例如从localStorage读取token
  const isAuthenticated = localStorage.getItem('user-token');

  // 判断目标路由是否需要认证
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!isAuthenticated) {
      // 用户未登录，重定向到登录页
      next('/login');
    } else {
      // 用户已登录，允许访问
      next();
    }
  } else {
    // 不需要认证的页面，直接放行
    next();
  }
});

export default router