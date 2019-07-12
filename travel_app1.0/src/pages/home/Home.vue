<template>
  <div class="common-wrap home-wrap">
    <!--1. 顶部-->
    <home-header></home-header>
    <!--2. 轮播-->
    <home-banner :swiperList="swiperList"></home-banner>
    <!--3. 金刚区-->
    <home-icons :iconList="iconList"></home-icons>
    <!--4. 热门推荐-->
    <home-hot :recommendList="recommendList"></home-hot>
    <!--5. 猜你喜欢-->
    <home-like></home-like>
    <!--6. 周末游-->
    <home-weekend></home-weekend>
  </div>
</template>

<script>
import axios from 'axios'
import HomeHeader from './component/HomeHeader'
import HomeBanner from './component/HomeBanner'
import HomeIcons from './component/HomeIcons'
import HomeHot from './component/HomeHot'
import HomeLike from './component/HomeLike'
import HomeWeekend from './component/HomeWeekend'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeBanner,
    HomeIcons,
    HomeHot,
    HomeLike,
    HomeWeekend
  },
  data () {
    return {
      swiperList: [], // 轮播
      iconList: [], // 金刚区
      recommendList: [], // 热门推荐
      weekendList: [] // 周末游
    }
  },
  methods: {
    // 获取轮播数据
    getHomeInfo () {
      axios.get('/api/home.json')
        .then(this.getHomeInfoSucc)
    },
    // 成功获取轮播数据
    getHomeInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.swiperList = data.swiperList // 轮播
        this.iconList = data.iconList // 金刚区
        this.recommendList = data.recommendList // 热门推荐
        this.weekendList = data.weekendList // 周末游
      }
    }
  },
  mounted () {
    this.getHomeInfo() // 获取轮播数据
  }
}
</script>

<style scoped rel="stylesheet/stylus" lang="stylus">
  @import '~@/assets/style/varibles.styl'
  .home-wrap
    background-color

</style>
