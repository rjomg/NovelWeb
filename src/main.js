// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper' // 引入轮播插件
import 'swiper/dist/css/swiper.css' // 轮播图插件样式
import './assets/styles/master.css' // 默认样式
import './assets/styles/iconfont.css' // 图标

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper) // , /* { default global options } */

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router,
  components: { App: App },
  template: '<App/>'
})
