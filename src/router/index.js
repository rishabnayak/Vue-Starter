import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import homepage from '@/components/homepage'
import profile from '@/components/profile'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/home',
      name: 'homepage',
      component: homepage
    },
    {
      path: '/profile',
      name: 'profile',
      component: profile
    }
  ]
})
