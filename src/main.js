// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import './firebase'
import firebase from 'firebase'
import Vue from 'vue'
import App from './App'
import router from './router'
import vueFire from 'vuefire'
require('./assets/css/app.css') //loading bootstrap css file

Vue.config.productionTip = false
Vue.use(vueFire)

let app;

firebase.auth().onAuthStateChanged(function (user){
  if(!app){
/* eslint-disable no-new */
    app = new Vue({
      el: '#app',
      router,
      template: '<App/>',
      components: { App }
    })
  }
});