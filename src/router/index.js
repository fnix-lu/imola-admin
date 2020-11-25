import Vue from 'vue'
import VueRouter from 'vue-router'

import BasicLayout from '../layout/BasicLayout'

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
    meta: {
      title: '客户',
    },
    children: [
      {
        path: 'manage',
        component: () => import('@/views/customer/manage')
      }
    ]
  },

  {
    path: '/order',
    component: BasicLayout,
    meta: {
      title: '订单',
    },
    children: [
      {
        path: 'manage',
        component: () => import('@/views/order/manage')
      }
    ]
  },

  {
    path: '/activity',
    component: BasicLayout,
    meta: {
      title: '活动',
    },
    children: [
      {
        path: 'manage',
        component: () => import('@/views/activity/manage')
      }
    ]
  },

  {
    path: '/product',
    component: BasicLayout,
    meta: {
      title: '商品',
    },
    children: [
      {
        path: 'manage',
        component: () => import('@/views/product/manage')
      }
    ]
  },

  {
    path: '/coupon',
    component: BasicLayout,
    meta: {
      title: '卡券',
    },
    children: [
      {
        path: 'manage',
        component: () => import('@/views/coupon/manage')
      }
    ]
  },

  {
    path: '/account',
    component: BasicLayout,
    meta: {
      title: '账号',
    },
    children: [
      {
        path: 'manage',
        component: () => import('@/views/account/manage')
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
