<template>
  <!--ref 获取DOM结构-->
  <div ref="wrapper" class="city-list">
    <div>
      <!--2. 字母列表区域-->
      <div class="letters-area"
           v-for="(item, key) of cityList"
           :key="key">
        <!--2.1 字母-->
        <h2 :id="key" class="title">{{ key }}</h2>
        <!--2.2 字母下の地名列表-->
        <ul class="city-letter-list">
          <!--2.2.1 每一项地名 li标签-->
          <li class="letter-list-wrapper"
              v-for="innerItem of item"
              :key="innerItem.id"
              v-on:click="handleCityClick(innerItem.name)"
          >
            <span class="letter-list-btn">{{ innerItem.name }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>

</template>

<script>
import Bscroll from 'better-scroll'

export default {
  name: 'CityList',
  props: {
    cityList: Object // 城市列表
  },
  mounted () {
    // 页面挂载时，加载better-scroll
    this.scroll = new Bscroll(this.$refs.wrapper)
  }
}
</script>

<style scoped rel="stylesheet/stylus" lang="stylus">
  @import "~style/varibles.styl"
  @import "~style/mixins.styl"
  /*2.城市列表页*/
 .city-list
    overflow hidden
    position absolute
    left 0
    top 0
    /*width 100%*/
    /*2.1 字母*/
    .title
      font-size .24rem
      padding .24rem .3rem
    /*2.2 字母下の地名列表 ul标签*/
    .city-letter-list
      width 100%
      overflow hidden
      background-color #fff
      /*2.2.1 每一项地名 li标签*/
      .letter-list-wrapper
        width 25%
        height .9rem
        line-height .9rem
        float left
        /*2.2.1 每一项地名 li标签 -- 可点击の按钮*/
        .letter-list-btn
          display inline-block
          width 100%
          height 100%
          text-align center
          border .02rem solid #f5f5f5
          overflow hidden
          ellipsis ellipsis()
</style>
