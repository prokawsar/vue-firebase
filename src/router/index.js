import Vue from 'vue'
import Router from 'vue-router'
import About from '@/components/About'
import Home from '@/components/Home'
import AddMe from '@/components/AddMe'
import Projects from '@/components/Projects'
import NotFound from '@/components/NotFound'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About,
      meta: {title: 'About'}
    },
    {
      path: '/firebase',
      name: 'AddMe',
      component: AddMe
    },
    {
      path: '/projects',
      name: 'Projects',
      component: Projects
    },
    {
      path: '*',
      name: 'NoFound',
      component: NotFound
    }
  ]
  // mode: 'history'
})
