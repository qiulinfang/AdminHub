import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home/Home.vue'),
    meta: {
      title: 'Home',
      breadcrumb: true,
      requiresAuth: true
    },
    children: [
      {
        path: '/FirstPage',
        name: 'FirstPage',
        component: () => import('@/views/Home/FirstPage/FirstPage.vue'),
        meta: {
          title: 'FirstPage',
          breadcrumb: true,
        },
      },
      {
        path: '/B',
        name: 'B',
        component: () => import('@/views/Home/test/B.vue'),
      },
      {
        path: '/C',
        name: 'C',
        component: () => import('@/views/Home/test/C.vue'),
      },
      {
        path: '/icons',
        name: 'icons',
        component: () => import('@/views/Home/icons/index.vue'),
        meta: {
          title: 'icons',
          breadcrumb: true,
        },
      },
      {
        path: '/exportexcel',
        name: 'exportexcel',
        component: () => import('@/views/Home/excel/exportexcel.vue'),
        meta: {
          title: 'exportexcel',
          breadcrumb: true,
        },
      },
      {
        path: '/uploadexcel',
        name: 'uploadexcel',
        component: () => import('@/views/Home/excel/uploadexcel.vue'),
        meta: {
          title: 'uploadexcel',
          breadcrumb: true,
        },
      },
      {
        path: '/tinymce',
        name: 'tinymce',
        component: () => import('@/views/Home/components-demo/tinymce.vue'),
        meta: {
          title: 'tinymce',
          breadcrumb: true,
        },
      },
      {
        path: '/mavonEditor',
        name: 'mavonEditor',
        component: () => import('@/views/Home/components-demo/mavonEditor.vue'),
        meta: {
          title: 'mavonEditor',
          breadcrumb: true,
        },
      },
      {
        path: '/JsonEditorDemo',
        name: 'JsonEditorDemo',
        component: () => import('@/views/Home/components-demo/JsonEditorDemo.vue'),
        meta: {
          title: 'JsonEditorDemo',
          breadcrumb: true,
        },
      },
      {
        path: '/404',
        name: '404',
        component: () => import('@/views/Home/error-page/404.vue'),
        meta: {
          title: '404',
          breadcrumb: false,
        },
      },
    ]
  },
  {
    path: '/Login',
    name: 'Login',
    component: () => import('@/views/Login/Login.vue'),
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