// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'babel-polyfill'
import 'style/reset.css'
import 'style/border.css'
import 'style/common.css'
import 'style/iconfont.css'
import 'swiper/dist/css/swiper.css'
// 全局引入vue-awesome-swiper方法

Vue.config.productionTip = false
// 初始化fastClick
fastClick.attach(document.body)
// 使用vue-awesome-swiper，后面可跟参数
Vue.use(VueAwesomeSwiper)

Vue.prototype.bus = new Vue()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
