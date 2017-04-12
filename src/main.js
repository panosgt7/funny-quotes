// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './App'

import Home from './components/Home.vue'
import Login from './components/Login.vue'
import Signup from './components/Signup.vue'
import SecretQuote from './components/SecretQuote.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import auth from './auth'

Vue.use(VueResource)
Vue.use(VueRouter)

Vue.http.headers.common['Authorization'] =  auth.getAuthHeader()
auth.checkAuth()

export var router = new VueRouter()

var router = new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/home', component: Home },
    { path: '/login', component: Login },
    { path: '/signup', component: Signup },
    { path: '/secretquote', component: SecretQuote }
  ]
})

var app = new Vue({
  router,
  ...App
}).$mount('#app')
