// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import './firebase'
import Vue from 'vue'
import App from './App'
import router from './router'
import vueFire from 'vuefire'

Vue.config.productionTip = false
Vue.use(vueFire)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  data:{
    first: 'hello'
  }
})
