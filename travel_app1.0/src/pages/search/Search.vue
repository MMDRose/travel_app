<template>
  <div class="common-wrap search-wrap">
    <!--1. 输入区域-->
    <search-header></search-header>
    <!--2. 热门搜索-->
    <search-hot :searchList01="searchList01"></search-hot>
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
      searchList01: [], //推荐列表01
      searchList02: [] //推荐列表02
    }
  },
  methods: {
    getSearchList () {
      axios.get('/api/search.json')
        .then(this.handleSearchListSucc)
    },
    handleSearchListSucc (res) {
      res = this.data
      if (res.ret && res.data) {
        const data = res.data
        this.searchList01 = data.suggestListLine01 // 推荐列表line01
        this.searchList02 = data.suggestListLine02 // 推荐列表line02
      }
    },

  },
  mounted () {
    this.getSearchList()
  }
}
</script>

<style scoped rel="stylesheet/stylus" lang="stylus">

</style>
