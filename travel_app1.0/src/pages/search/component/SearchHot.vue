<template>
  <main class="search-suggest">
    <!--2.1 title-->
    <header class="suggest-title">
      <span>热门搜索</span>
    </header>
    <!--2.2 推荐内容-->
    <div class="suggest-cnt">
      <!--2.2.1 line 01 每项推荐-->
      <div class="suggest-group"
           v-for="item of searchList01"
      >
        <!--L图标-->
        <h1 class="suggest-group-icon">
          <div class="icon-box">
            <img class="icon-box-img" :src="item.iconUrl" alt="">
          </div>
        </h1>
        <!--R列表-->
        <div class="suggest-group-item suggest-group-item01"
             v-for="group of item.groupLists"
             :key="group.id"
        >
          <a :href="group.linkUrl" class="group-item-link">{{ group.title }}</a>
        </div>
      </div>

      <!--2.2.1 line 02 每项推荐-->
      <div class="suggest-group">
        <!--L图标-->
        <h1 class="suggest-group-icon">
          <div class="icon-box">
            <img class="icon-box-img" src="http://img1.qunarzz.com/piao/fusion/1511/da/8c3405b0e7d493f7.png" alt="">
          </div>
        </h1>
        <!--R列表-->
        <div class="suggest-group-item suggest-group-item02">
          <a href="http://piao.qunar.com/touch/detail.htm?id=38170?cat=from_area%3Dtl_hot_search%26from_value%3D%25E6%2595%2585%25E5%25AE%25AB%26from_index%3D0" class="group-item-link" data-name="故宫" data-click="tl_hot_search" data-click-from-value="故宫" data-click-from-index="0" data-click-dist-city="">故宫</a>
          <a href="http://piao.qunar.com/touch/detail.htm?id=192160?cat=from_area%3Dtl_hot_search%26from_value%3D%25E5%25A4%25A9%25E6%25B4%25A5%25E6%25AC%25A2%25E4%25B9%2590%25E8%25B0%25B7%26from_index%3D1" class="group-item-link" data-name="天津欢乐谷" data-click="tl_hot_search" data-click-from-value="天津欢乐谷" data-click-from-index="1" data-click-dist-city="">天津欢乐谷</a>
          <a href="http://piao.qunar.com/touch/detail.htm?id=195749?cat=from_area%3Dtl_hot_search%26from_value%3D%25E5%25A4%25A9%25E6%25B4%25A5%25E6%2596%25B9%25E7%2589%25B9%25E6%25AC%25A2%25E4%25B9%2590%25E4%25B8%2596%25E7%2595%258C%26from_index%3D2" class="group-item-link" data-name="天津方特欢乐世界" data-click="tl_hot_search" data-click-from-value="天津方特欢乐世界" data-click-from-index="2" data-click-dist-city="">天津方特欢乐世界</a>
          <a href="http://piao.qunar.com/touch/detail.htm?id=10917?cat=from_area%3Dtl_hot_search%26from_value%3D%25E5%258C%2597%25E4%25BA%25AC%25E5%258A%25A8%25E7%2589%25A9%25E5%259B%25AD%26from_index%3D3" class="group-item-link" data-name="北京动物园" data-click="tl_hot_search" data-click-from-value="北京动物园" data-click-from-index="3" data-click-dist-city="">北京动物园</a>
          <a href="http://piao.qunar.com/touch/detail.htm?id=10204?cat=from_area%3Dtl_hot_search%26from_value%3D%25E9%25A2%2590%25E5%2592%258C%25E5%259B%25AD%26from_index%3D4" class="group-item-link" data-name="颐和园" data-click="tl_hot_search" data-click-from-value="颐和园" data-click-from-index="4" data-click-dist-city="">颐和园</a>
          <a href="http://piao.qunar.com/touch/detail.htm?id=11341?cat=from_area%3Dtl_hot_search%26from_value%3D%25E5%25A4%25A9%25E6%25B4%25A5%25E7%259B%2598%25E5%25B1%25B1%25E9%25A3%258E%25E6%2599%25AF%25E5%2590%258D%25E8%2583%259C%25E5%258C%25BA%26from_index%3D5" class="group-item-link" data-name="天津盘山风景名胜区" data-click="tl_hot_search" data-click-from-value="天津盘山风景名胜区" data-click-from-index="5" data-click-dist-city="">天津盘山风景名胜区</a>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'SearchHot',
  props: {
    searchList01: Array,
    searchList02: Array
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~style/varibles.styl"
  @import "~style/mixins.styl"
  .search-suggest
    position absolute
    top .98rem
    width 100%
    -webkit-box-shadow: 0 .01rem .03rem .01rem #c7ced4
    -moz-box-shadow: 0 .01rem .03rem .01rem #c7ced4
    box-shadow: 0 .01rem .03rem .01rem #c7ced4
    background-color #fff
    /*2.1 title*/
    .suggest-title
      padding $padding
      height .64rem
      line-height .64rem
      color #888
      font-size .26rem
      background-color $bgLightBlue
    /*2.2 推荐内容*/
    .suggest-cnt
      /*2.2.1 每项推荐*/
      .suggest-group
        position relative
        padding-left .74rem
        border-top .01rem solid #dce5e7
        /*2.2.1 L图标*/
        .suggest-group-icon
          position absolute
          left 0
          top 0
          width .74rem
          height 100%
          line-height 100%
          overflow hidden
          text-align center
          /*icon图标容器*/
          .icon-box
            position absolute
            top: 15%
            width .72rem
            height 70%
            border-right .01rem solid #dce5e7
            /*icon 图标*/
            .icon-box-img
              position relative
              /*top 50%*/
              top 40%
              margin-left -.15rem
              width .3rem
              height .3rem
        /*2.2.1 R列表*/
        .suggest-group-item
          position relative
          overflow hidden
          max-height 1.8rem
          /*a link*/
          .group-item-link
            margin-top .25rem
            margin-bottom .25rem
            float left
            height .36rem
            line-height .36rem
            max-width 2.89rem
            text-align center
            padding-left .3rem
            padding-right .3rem
            color #333
            border-right .01rem dashed #c9cccd
            ellipsis()
          .group-item-link:last-child
            border-right 0
        /*2.2.1 R列表 line02*/
        .suggest-group-item02
          max-height .9rem
</style>
