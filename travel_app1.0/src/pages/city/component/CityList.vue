<template>
  <!--城市选择-->
  <!--ref帮助我们获取DOM-->
  <div class="city-list" ref="wrapper">
    <div>
      <!--1. 当前城市-->
      <div class="area">
        <div class="area-title ">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
        </div>
      </div>

      <!--2. 热门城市-->
      <div class="area">
        <div class="area-title ">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper"
               v-for="item of cityHot"
               :key="item.id"
               :data-id="item.id"
          >
            <div class="button">{{ item.name }}</div>
          </div>
        </div>
      </div>

      <!--3. 城市列表-->
      <div class="area"
           v-for="(item, key) of cityList"
           :key="key"
           :ref="key"

      >
        <h2 class="area-title " :data-id="key">{{ key }}</h2>
        <ul class="city-lists">
          <li class="city-item border-bottom"
              v-for="innerItem of item"
              :key="innerItem.id"
          >
            {{ innerItem.name }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
// 引入better-scroll
import Bscroll from 'better-scroll'
export default {
  name: 'CityList',
  props: {
    cityHot: Array, // 热门城市
    cityList: Object, // 城市列表
    letter: String // 用户点击的字母
  },
  watch: {
    // 侦听器，实时监听letter的变化
    letter () {
      // 如果letter有变化
      if (this.letter) {
        const element = this.$refs[this.letter][0]
        // better-scroll 提供的方法，滚动到点击的位置
        this.scroll.scrollToElement(element)
      }
    }
  },
  mounted () {
    // DOM挂载完毕后，创建BScroll实例
    this.scroll = new Bscroll(this.$refs.wrapper)
  }
}
</script>

<style scoped rel="stylesheet/stylus" lang="stylus">
  @import "~style/varibles.styl"
  @import "~style/mixins.styl"

  .city-list
    overflow hidden
    position absolute
    top 1.68rem /*.8+.86*/
    left 0
    bottom 0
    right 0
    .area
      overflow hidden
      /*1.1 区域标题*/
      .area-title
        margin .24rem .3rem
        font-size .24rem
        color $textSub
      /*1.2 内容*/
      .button-list,
      .city-lists
        padding .1rem .6rem .1rem .1rem
        overflow hidden
        background-color #fff
        .button-wrapper
          float left
          width 33.33%
          .button
            padding .15rem 0
            margin .1rem
            text-align center
            border-radius .06rem
            background-color rgb(234,238,241)
            font-weight 500
            color $textMainTitle
        .city-item
          line-height .76rem
          padding-left .2rem
          color $textMainTitle
          ellipsis()
</style>
