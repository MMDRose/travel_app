<template>
  <div class="city-search w-100">
    <!--1. 输入框-->
    <nav class="search-cnt common-padding-14">
      <input class="city-search-input w-100"
             type="text"
             placeholder="输入城市或拼音"
             v-model="keyword"
      >
    </nav>
    <!--2. 搜索结果-->
    <main ref="search" class="search-result common-padding-14">
      <ul>
        <li class="search-item border-bottom"
            v-for="(item, key) of list"
            :key="item.id"
        >{{ item.name }}</li>
      </ul>
    </main>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'CitySearch',
  props: {
    cityList: Object // 城市列表
  },
  data() {
    return {
      keyword: '', // 关键字
      list: [] // 数组存放具体城市名
    }
  },
  watch: {
   keyword () {
     const result = [] // 存放符合条件的新数组
     // 遍历城市列表数据
     for (let i in this.cityList) {
       this.cityList[i].forEach((item) => {
         if (item.spell.indexOf(this.keyword) > -1 || item.name.indexOf(this.keyword) > -1) {
           result.push(item)
         }
       })
     }
     this.list = result // 将符合条件的新数组赋值给创建好的数组list，以便循环展示列表
   },
    mounted () {
     this.scroll = new BScroll(this.$refs.search)
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~style/varibles.styl"
  @import "~style/mixins.styl"

.city-search
  margin-top .88rem
  background-color #fff
  z-index 8
  /*1. 输入框*/
  .search-cnt
    position fixed
    /*top .88rem*/
    height .8rem
    line-height .7rem
    z-index 9
    background-color $bgMainGreen
    .city-search-input
      /*background-color #25a4bb*/
      padding 0 .2rem
      borderBox()
      height .56rem
      line-height .56rem
      border-radius $borderRadius
      text-align center
      color $textLight
      font-size .24rem
  /*2. 搜索结果*/
  .search-result
    position absolute
    overflow: hidden

    padding-top .8rem
    background-color $bgWhite
    background-color red
    z-index 8
    .search-item
      line-height: .62rem
      padding-left: .2rem

</style>
