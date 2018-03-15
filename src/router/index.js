import Vue from 'vue'
import Router from 'vue-router'

import Main from './main'
import User from './user'
import Login from './login'
import Regist from './regist'
import Active from './active'
import Help from './help'
import Test from './test'
import Home from './home'

//for login
import store from '../store/store'
import * as types from '../store/types'

Vue.use(Router)

const routes = [
    Home,
    Main,
    User,
    Active,
    Test,
    Login,
    Regist,
    Help,
  ]

// 页面刷新时，重新赋值token 需要么？
if (window.localStorage.getItem('token')) {
  store.commit(types.LOGIN, window.localStorage.getItem('token'))
}

const router = new Router({
  routes
})


router.beforeEach((to, from, next) => {
  if (to.matched.some(r => r.meta.requireAuth)) {
    if (store.state.token) {
      next();
    }
    else {
      next({
        path: '/user/login',
        query: {redirect: to.fullPath}
      })
    }
  }
  else {
    next();
  }
})


export default router;
