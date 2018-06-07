import Vue from 'vue'
import Router from 'vue-router'

import Main from '../app.js'
import SignIn from '../signIn.vue'
console.log('MAIN=');
console.log(Main);
Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '*',
      redirect: '/signin'
    },
    {
      path: '/',
      redirect: '/signin'
    },
    {
      path: '/signin',
      name: 'Signin',
      component: Signin
    },
    {
      path: '/main',
      name: 'Main',
      component: Main,
    }
  ]
})

router.beforeEach((to, from, next) => {
  let currentUser = firebase.auth().currentUser
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth)

  if (requiresAuth && !currentUser) next('signin')
  else if (!requiresAuth && currentUser) next('main')
  else next()
})

export default router
