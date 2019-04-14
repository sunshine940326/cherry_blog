import Vue from 'vue'
import index from '@/views/index'
import VueRouter from 'vue-router'
import article from '@/views/article'
import about from '@/views/about'
import tag from '@/views/tag'
import tagList from '@/views/tag/tagList.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'hash',
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
      path: '/tag/:tagName',
      name: 'tagList',
      component: tagList
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
