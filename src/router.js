import Vue from 'vue'
import index from '@/views/index'
import tag from '@/views/tag'
import VueRouter from 'vue-router'
import article from '@/views/article'
import about from '@/views/about'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/tag',
      name: 'tag',
      component: tag
    },
    {
      path: '/article/:articleId',
      name: 'articleDetail',
      component: article
    },
    {
      path: '/about',
      name: 'about',
      component: about
    }
  ]
})
