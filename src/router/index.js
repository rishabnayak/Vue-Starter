import Vue from 'vue'
import Router from 'vue-router'
import homepage from '@/components/homepage'
import notes from '@/components/notes'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
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
