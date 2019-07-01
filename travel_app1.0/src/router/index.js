import Vue from 'vue'
import Router from 'vue-router'
import Search from 'pages/search/Search'

// 使用router
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Search',
      component: Search
    }
  ]
})
