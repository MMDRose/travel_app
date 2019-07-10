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
    <!--搜索结果显示与否，取决于keyword是否有值-->
    <main ref="search"
          class="search-result common-padding-14"
          v-show="keyword"
    >
      <ul>
        <li class="search-item border-bottom"
            v-for="item of list"
            :key="item.id"
        >
          {{ item.name }}
        </li>
        <li class="search-item border-bottom" v-show="hasNoData">
          没有找到匹配数据
        </li>
      </ul>
    </main>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'CitySearch',
  props: {
    cityList: Object // 城市列表
  },
  data () {
    return {
      keyword: '', // 双向绑定输入关键字
      list: [], // 数组存放具体城市名
      timer: null // 节流
    }
  },
  computed: {
    // 如果没有匹配の内容
    hasNoData () {
      return !this.list.length // 当list长度为0时，显示该项
    }
  },
  watch: {
    // 侦听器监听keyword改变
    keyword () {
      // 节流函数
      if (this.timer) {
        clearTimeout(this.timer)
      }
      // 如果输入keyword不存在，置空list数组
      if (!this.keyword) {
        this.list = []
        return
      }
      // 当keyword发生改变，100ms后函数执行
      this.timer = setTimeout(() => {
        const result = []
        // 首先遍历城市列表最外层（含有a，b，c，d...）
        for (let i in this.cityList) {
          // 再次遍历每个字母下的城市名
          this.cityList[i].forEach((value) => {
            // 如果有符合拼写或名字的关键字
            if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
              // 符合搜索条件的名字添加到result数组中
              result.push(value)
            }
          })
        }
        // 将result添加到list中
        this.list = result
      }, 100)
    }
  },
  mounted () {
    // 实例化better-scroll
    this.scroll = new Bscroll(this.$refs.search) // 获取searchのDOM节点
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
    height .8rem
    line-height .7rem
    z-index 9
    background-color $bgMainGreen
    .city-search-input
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
    /*任何长度值都可以使用calc()函数进行计算*/
    min-height calc(100% - .88rem) /*运算符前后都需要保留一个空格width: calc(100% - 10px)*/
    background-color $bgWhite
    z-index 8
    .search-item
      line-height: .62rem
      padding-left: .2rem
</style>
