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
import firebase from 'firebase'

Vue.use(Router)

let router = new Router({
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
      component: Chat,
      meta:{
        requiresAuth: true
      }
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
      component: AddMe,
      meta:{
        requiresAuth: true
      }
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

router.beforeEach((to, from, next) => {
  let currentUser = firebase.auth().currentUser;
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !currentUser) next('login')
  else if(!requiresAuth) next()
  else if (!requiresAuth && currentUser) next('chat')
  else next()
})

export default router
