import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import editprofile from '@/components/edit-profile'
import profile from '@/components/profile'
import createproject from '@/components/create-project'
import project from '@/components/project'
import editproject from '@/components/edit-project'

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
      path: '/editprofile',
      name: 'editprofile',
      component: editprofile
    },
    {
      path: '/profile/:uname',
      name: 'profile',
      component: profile
    },
    {
      path: '/project/:name',
      name: 'project',
      component: project
    },
    {
      path: '/createproject',
      name: 'createproject',
      component: createproject
    },
    {
      path: '/editproject/:name',
      name: 'editproject',
      component: editproject
    },
  ]
})
