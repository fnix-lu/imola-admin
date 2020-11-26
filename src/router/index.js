import Vue from 'vue'
import VueRouter from 'vue-router'

import BasicLayout from '../layout/BasicLayout'
import RouterView from '../layout/parts/RouterView'

Vue.use(VueRouter)

/**
 * hidden: 设置为 true 时不在菜单显示
 * meta: {
 *  title: 菜单显示的名称
 * }
 */
export const routes = [
  {
    path: '/customer',
    component: BasicLayout,
    redirect: '/customer/manage',
    meta: {
      title: '客户',
    },
    children: [
      {
        path: 'manage',
        component: () => import('@/views/customer/manage'),
        meta: {
          title: '客户管理'
        }
      },
      {
        path: 'aaa',
        component: RouterView,
        meta: {
          title: 'AAA'
        },
        children: [
          {
            path: '111',
            component: () => import('@/views/customer/aaa/111'),
            meta: {
              title: '111'
            }
          }
        ]
      }
    ]
  },

  {
    path: '/order',
    component: BasicLayout,
    redirect: '/order/manage',
    meta: {
      title: '订单',
    },
    children: [
      {
        path: 'manage',
        component: () => import('@/views/order/manage'),
        meta: {
          title: '订单管理'
        }
      }
    ]
  },

  {
    path: '/activity',
    component: BasicLayout,
    redirect: '/activity/manage',
    meta: {
      title: '活动',
    },
    children: [
      {
        path: 'manage',
        component: () => import('@/views/activity/manage'),
        meta: {
          title: '活动管理'
        }
      }
    ]
  },

  {
    path: '/product',
    component: BasicLayout,
    redirect: '/product/manage',
    meta: {
      title: '商品',
    },
    children: [
      {
        path: 'manage',
        component: () => import('@/views/product/manage'),
        meta: {
          title: '商品管理'
        }
      }
    ]
  },

  {
    path: '/coupon',
    component: BasicLayout,
    redirect: '/coupon/manage',
    meta: {
      title: '卡券',
    },
    children: [
      {
        path: 'manage',
        component: () => import('@/views/coupon/manage'),
        meta: {
          title: '卡券管理'
        }
      }
    ]
  },

  {
    path: '/account',
    component: BasicLayout,
    redirect: '/account/manage',
    meta: {
      title: '账号',
    },
    children: [
      {
        path: 'manage',
        component: () => import('@/views/account/manage'),
        meta: {
          title: '账号管理'
        }
      }
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
