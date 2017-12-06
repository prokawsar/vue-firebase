import Vue from 'vue'
import Router from 'vue-router'
import About from '@/components/About'
import Home from '@/components/Home'
import Chat from '@/components/Chat'
import Login from '@/components/auth/Login'
import Register from '@/components/auth/Register'
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
      path: '/chat',
      name: 'Chat',
      component: Chat
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
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
