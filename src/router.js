import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import page from './views/Page.vue'
import Tour from './views/360Tour.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
      {
      path: '/page',
      name: 'page',
      component: page
    },
    {
      path: '/360Tour',
      name: 'tour',
      component: Tour
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
