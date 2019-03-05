// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './mock'
import axios from 'axios'
import './../static/css/public.css'
import store from './../src/store/'
import VueWechatTitle from 'vue-wechat-title'
import Toast from './components/Toast.vue'


  

// window._store = store
window.axios = axios;

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(Vuex)
Vue.use(VueWechatTitle)
Vue.component('Toast',Toast)

var abc="abc";

new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
