<template>
  <div class="common-wrap city-wrap">
    <!--顶部导航-->
    <city-header></city-header>
    <!--搜索-->
    <city-search :cityList="cityList"></city-search>
    <!--城市-->
    <city-list
      :cityList="cityList"
      :cityHot="cityHot"
      :letter="letter"
    ></city-list>
    <!--字母丫-->
    <alcohol-letter
      :cityList="cityList"
      @change="handleChangeLetter"
    ></alcohol-letter>
  </div>
</template>

<script>
// ajax的请求一般放在外层的组件中写，发送一次ajax就可以获取到数据内容
import axios from 'axios'
import CityHeader from './component/CityHeader'
import CitySearch from './component/CitySearch'
import CityList from './component/CityList'
import AlcoholLetter from './component/AlcoholLetter'

export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    AlcoholLetter
  },
  data () {
    return {
      cityList: {}, // 城市列表
      cityHot: [], // 热门城市
      letter: '' // 点击收到的字母
    }
  },
  methods: {
    // 接收到子组件传的 letter
    handleChangeLetter (letter) {
      this.letter = letter
    },
    // 获取城市列表信息
    getCityData () {
      axios.get('/api/city.json')
        .then(this.getCityDataSucc)
    },
    // 城市列表信息成功
    getCityDataSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.cityList = data.cities // 城市列表
        this.cityHot = data.hotCities // 热门城市
      }
    }
  },
  mounted () {
    this.getCityData() // DOM挂载后加载该方法
  }
}
</script>

<style scoped rel="stylesheet/stylus" lang="stylus">

</style>
