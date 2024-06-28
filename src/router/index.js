import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'

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
        path: '/instrumentPanel',
        name: 'instrumentPanel',
        component: () => import('@/views/instrument panel/instrumentPanel.vue'),
        meta: {
          title: 'instrumentPanel',
          breadcrumb: true,
          requiresAuth: true
        },

      },
      {
        path: '/Advertisement List',
        name: 'Advertisement List',
        component: () => import('@/views/Marketing/Advertisement List.vue'),
        meta: {
          title: 'Advertisement List',
          breadcrumb: true,
          requiresAuth: true
        },

      },
      {
        path: '/Brands Recommendation',
        name: 'Brands Recommendation',
        component: () => import('@/views/Marketing/Brands Recommendation.vue'),
        meta: {
          title: 'Brands Recommendation',
          breadcrumb: true,
          requiresAuth: true
        },
      },
      {
        path: '/Coupon List',
        name: 'Coupon List',
        component: () => import('@/views/Marketing/Coupon List.vue'),
        meta: {
          title: 'Coupon List',
          breadcrumb: true,
        },
      },
      {
        path: '/Flash Sale List',
        name: 'Flash Sale List',
        component: () => import('@/views/Marketing/Flash Sale List.vue'),
        meta: {
          title: 'Flash Sale List',
          breadcrumb: true,
        },
      },
      {
        path: '/New Arrival Recommendations',
        name: 'New Arrival Recommendations',
        component: () => import('@/views/Marketing/New Arrival Recommendations.vue'),
        meta: {
          title: 'New Arrival Recommendations',
          breadcrumb: true,
        },
      },
      {
        path: '/Popularity Recommendations',
        name: 'Popularity Recommendations',
        component: () => import('@/views/Marketing/Popularity Recommendations.vue'),
        meta: {
          title: 'Popularity Recommendations',
          breadcrumb: true,
        },
      },
      {
        path: '/Special Topic Recommendations',
        name: 'Special Topic Recommendations',
        component: () => import('@/views/Marketing/Special Topic Recommendations.vue'),
        meta: {
          title: 'Special Topic Recommendations',
          breadcrumb: true,
        },
      },
      {
        path: '/Order List',
        name: 'Order List',
        component: () => import('@/views/Order/Order List.vue'),
        meta: {
          title: 'Order List',
          breadcrumb: true,
        },
      },
      {
        path: '/Order Settings',
        name: 'Order Settings',
        component: () => import('@/views/Order/Order Settings.vue'),
        meta: {
          title: 'Order Settings',
          breadcrumb: true,
        },
      },
      {
        path: '/Return Reason Settings',
        name: 'Return Reason Settings',
        component: () => import('@/views/Order/Return Reason Settings.vue'),
        meta: {
          title: 'Return Reason Settings',
          breadcrumb: true,
        },
      },
      {
        path: '/Return Request Handling',
        name: 'Return Request Handling',
        component: () => import('@/views/Order/Return Request Handling.vue'),
        meta: {
          title: 'Return Request Handling',
          breadcrumb: true,
        },
      },
      {
        path: '/Menu List',
        name: 'Menu List',
        component: () => import('@/views/Permissions/Menu List.vue'),
        meta: {
          title: 'Menu List',
          breadcrumb: true,
        },
      },
      {
        path: '/Resource List',
        name: 'Resource List',
        component: () => import('@/views/Permissions/Resource List.vue'),
        meta: {
          title: 'Resource List',
          breadcrumb: true,
        },
      },
      {
        path: '/Role List',
        name: 'Role List',
        component: () => import('@/views/Permissions/Role List.vue'),
        meta: {
          title: 'Role List',
          breadcrumb: true,
        },
      },
      {
        path: '/User List',
        name: 'User List',
        component: () => import('@/views/Permissions/User List.vue'),
        meta: {
          title: 'User List',
          breadcrumb: true,
        },
      },
      {
        path: '/Product List',
        name: 'Product List',
        component: () => import('@/views/Product/Product List.vue'),
        meta: {
          title: 'Product List',
          breadcrumb: true,
        },
      },
      {
        path: '/Add Product',
        name: 'Add Product',
        component: () => import('@/views/Product/Add Product.vue'),
        meta: {
          title: 'Add Product',
          breadcrumb: true,
        },
      },
      {
        path: '/Brand Management',
        name: 'Brand Management',
        component: () => import('@/views/Product/Brand Management.vue'),
        meta: {
          title: 'Brand Management',
          breadcrumb: true,
        },
      },
      {
        path: '/Product Category',
        name: 'Product Category',
        component: () => import('@/views/Product/Product Category.vue'),
        meta: {
          title: 'Product Category',
          breadcrumb: true,
        },
      },
      {
        path: '/Product Type',
        name: 'Product Type',
        component: () => import('@/views/Product/Product Type.vue'),
        meta: {
          title: 'Product Type',
          breadcrumb: true,
        },
      },
      {
        path: '/ProductList',
        name: 'ProductList',
        component: () => import('@/views/Product/ProductList.vue'),
        meta: {
          title: 'ProductList',
          breadcrumb: true,
        },
      },
    ]
  },
  {
    path: '/Login',
    name: 'Login',
    component: () => import('@/views/Login/Login.vue'),
    meta: {
      title: 'Login',
      breadcrumb: true,
    },
  },
]


const router = createRouter({
  history: createWebHashHistory(),
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