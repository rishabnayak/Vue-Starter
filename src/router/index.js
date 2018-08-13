import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import homepage from '@/components/homepage'
import editprofile from '@/components/edit-profile'
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
      path: '/editprofile',
      name: 'editprofile',
      component: editprofile
    },
    {
      path: '/profile/:uname',
      name: 'profile',
      component: profile
    }
  ]
})
