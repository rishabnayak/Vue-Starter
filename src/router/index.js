import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import homepage from '@/components/homepage'
import notes from '@/components/notes'

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
      path: '/notes',
      name: 'notes',
      component: notes
    }
  ]
})
