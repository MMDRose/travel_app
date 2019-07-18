import Vue from 'vue'
import Router from 'vue-router'
import Home from 'pages/home/Home'
import Search from 'pages/search/Search'
import City from 'pages/city/City'
import List from 'pages/list/List'

// 使用router
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/search',
      name: 'Search',
      component: Search
    }, {
      path: '/city',
      name: 'City',
      component: City
    }, {
      path: '/list',
      name: 'List',
      component: List
    }
  ]
})
