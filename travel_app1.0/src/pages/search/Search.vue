<template>
  <div class="common-wrap search-wrap">
    <!--1. 输入区域-->
    <search-header></search-header>
    <!--2. 热门搜索-->
    <search-hot :suggestSight="suggestSight" :suggestPlace="suggestPlace"></search-hot>
  </div>
</template>

<script>
import axios from 'axios'
import SearchHeader from './component/SearchHeader'
import SearchHot from './component/SearchHot'

export default {
  name: 'Search',
  components: {
    SearchHeader,
    SearchHot
  },
  data () {
    return {
      suggestSight: {}, // 推荐景点
      suggestPlace: {} // 推荐地名
    }
  },
  methods: {
    getSearchList () {
      axios.get('/api/search.json')
        .then(this.handleSearchListSucc)
    },
    handleSearchListSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.suggestSight = data.suggestSight // 推荐景点
        this.suggestPlace = data.suggestPlace // 推荐地名
      }
    }
  },
  mounted () {
    this.getSearchList()
  }
}
</script>

<style scoped rel="stylesheet/stylus" lang="stylus">

</style>
