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
        path: '/Advertisement List',
        name: 'Advertisement List',
        component: () => import('@/views/Marketing/Advertisement List.vue'),
      },
      {
        path: '/Brands Recommendation',
        name: 'Brands Recommendation',
        component: () => import('@/views/Marketing/Brands Recommendation.vue'),
      },
      {
        path: '/Coupon List',
        name: 'Coupon List',
        component: () => import('@/views/Marketing/Coupon List.vue'),
        meta: {
          title: 'icons',
          breadcrumb: true,
        },
      },
      {
        path: '/Flash Sale List',
        name: 'Flash Sale List',
        component: () => import('@/views/Marketing/Flash Sale List.vue'),
        meta: {
          title: 'exportexcel',
          breadcrumb: true,
        },
      },
      {
        path: '/New Arrival Recommendations',
        name: 'New Arrival Recommendations',
        component: () => import('@/views/Marketing/New Arrival Recommendations.vue'),
        meta: {
          title: 'uploadexcel',
          breadcrumb: true,
        },
      },
      {
        path: '/Popularity Recommendations',
        name: 'Popularity Recommendations',
        component: () => import('@/views/Marketing/Popularity Recommendations.vue'),
        meta: {
          title: 'tinymce',
          breadcrumb: true,
        },
      },
      {
        path: '/Special Topic Recommendations',
        name: 'Special Topic Recommendations',
        component: () => import('@/views/Marketing/Special Topic Recommendations.vue'),
        meta: {
          title: 'mavonEditor',
          breadcrumb: true,
        },
      },
      {
        path: '/Order List',
        name: 'Order List',
        component: () => import('@/views/Order/Order List.vue'),
        meta: {
          title: 'JsonEditorDemo',
          breadcrumb: true,
        },
      },
      {
        path: '/Order Settings',
        name: 'Order Settings',
        component: () => import('@/views/Order/Order Settings.vue'),
        meta: {
          title: '404',
          breadcrumb: false,
        },
      },
      {
        path: '/Return Reason Settings',
        name: 'Return Reason Settings',
        component: () => import('@/views/Order/Return Reason Settings.vue'),
        meta: {
          title: '404',
          breadcrumb: false,
        },
      },
      {
        path: '/Return Request Handling',
        name: 'Return Request Handling',
        component: () => import('@/views/Order/Return Request Handling.vue'),
        meta: {
          title: '404',
          breadcrumb: false,
        },
      },
      {
        path: '/Menu List',
        name: 'Menu List',
        component: () => import('@/views/Permissions/Menu List.vue'),
        meta: {
          title: '404',
          breadcrumb: false,
        },
      },
      {
        path: '/Resource List',
        name: 'Resource List',
        component: () => import('@/views/Permissions/Resource List.vue'),
        meta: {
          title: '404',
          breadcrumb: false,
        },
      },
      {
        path: '/Role List',
        name: 'Role List',
        component: () => import('@/views/Permissions/Role List.vue'),
        meta: {
          title: '404',
          breadcrumb: false,
        },
      },
      {
        path: '/User List',
        name: 'User List',
        component: () => import('@/views/Permissions/User List.vue'),
        meta: {
          title: '404',
          breadcrumb: false,
        },
      },
      {
        path: '/Product List',
        name: 'Product List',
        component: () => import('@/views/Product/Product List.vue'),
        meta: {
          title: '404',
          breadcrumb: false,
        },
      },
      {
        path: '/Add Product',
        name: 'Add Product',
        component: () => import('@/views/Product/Add Product.vue'),
        meta: {
          title: '404',
          breadcrumb: false,
        },
      },
      {
        path: '/Brand Management',
        name: 'Brand Management',
        component: () => import('@/views/Product/Brand Management.vue'),
        meta: {
          title: '404',
          breadcrumb: false,
        },
      },
      {
        path: '/Product Category',
        name: 'Product Category',
        component: () => import('@/views/Product/Product Category.vue'),
        meta: {
          title: '404',
          breadcrumb: false,
        },
      },
      {
        path: '/Product Type',
        name: 'Product Type',
        component: () => import('@/views/Product/Product Type.vue'),
        meta: {
          title: '404',
          breadcrumb: false,
        },
      },
      {
        path: '/ProductList',
        name: 'ProductList',
        component: () => import('@/views/Product/ProductList.vue'),
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