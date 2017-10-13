import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/home'
import Group from '@/components/group/group'
import Discovery from '@/components/discovery/discovery'
import User from '@/components/user/user'

Vue.use(Router)

export default new Router({
	linkActiveClass: 'active',
  routes: [
	  {
	  	path: '/',
	  	redirect: '/home'
	  },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/group',
      component: Group
    },
    {
      path: '/discovery',
      component: Discovery
    },
    {
      path: '/user',
      component: User
    }
  ]
})
