<template>
  <main class="search-suggest">
    <!--1. 历史记录-->
    <div class="suggest-wrap">
      <!--1.1 title-->
      <header class="suggest-title">
        <span>搜索历史</span>
        <span class="clear-btn" @click="historyClear">
          <i class="iconfont icon-delete"></i>
          清除
        </span>
      </header>
      <!--1.2 历史记录列表-->
      <div class="suggest-history">
        <ul class="history-items">
          <li class="history-item">厦门</li>
          <li class="history-item">夏威夷</li>
          <li class="history-item">苏门答腊列岛</li>
          <li class="history-item">香港</li>
          <li class="history-item">宁波</li>
          <li class="history-item">苏州</li>
          <li class="history-item">厦门</li>
        </ul>
      </div>
    </div>

    <!--2. 热门推荐-->
    <div class="suggest-wrap">
      <!--2.1 title-->
      <header class="suggest-title">
        <span>热门搜索</span>
        <span class="change-btn">
           <i class="iconfont icon-update"></i>
          换一换
        </span>
      </header>
      <!--2.2 推荐内容-->
      <div class="suggest-cnt">
        <!--2.2.1 line 01 景点推荐-->
        <div class="suggest-group">
          <!--L图标-->
          <h1 class="suggest-group-icon">
            <div class="icon-box">
              <img class="icon-box-img" :src="suggestSight.iconUrl" alt="">
            </div>
          </h1>
          <!--R列表-->
          <div class="suggest-group-item suggest-group-item01">
            <a v-for="group of suggestSight.groupLists"
               :key="group.id"
               :href="group.linkUrl"
               class="group-item-link"
               :data-id="group.id"
            >{{ group.title }}</a>
          </div>
        </div>

        <!--2.2.1 line 02 地名推荐-->
        <div class="suggest-group">
          <!--L图标-->
          <h1 class="suggest-group-icon">
            <div class="icon-box">
              <img class="icon-box-img" :src="suggestPlace.iconUrl" alt="">
            </div>
          </h1>
          <!--R列表-->
          <div class="suggest-group-item suggest-group-item02">
            <a
              v-for="group of suggestPlace.groupLists"
              :href="group.linkUrl"
              :key="group.id"
              class="group-item-link"
              :data-id="group.id"
            >{{ group.title }}</a>
          </div>
        </div>
      </div>
    </div>

  </main>
</template>

<script>
export default {
  name: 'SearchHot',
  props: {
    suggestSight: Object, // 推荐景点
    suggestPlace: Object // 推荐地名
  },
  methods: {
    // 点击按钮--清除历史记录
    historyClear () {

    }
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
    font-size .26rem
    -webkit-box-shadow: 0 .01rem .03rem .01rem #c7ced4
    -moz-box-shadow: 0 .01rem .03rem .01rem #c7ced4
    box-shadow: 0 .01rem .03rem .01rem #c7ced4
    background-color #fff
    /*2.1 title*/
    .suggest-title
      display flex
      justify-content space-between
      padding padding()
      height .64rem
      line-height .64rem
      color #888
      background-color $bgLightBlue
      .clear-btn,
      .change-btn
        color $colorMainGreen
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
    /*搜索记录列表*/
    .suggest-history
      width 100%
      height 1.24rem
      overflow-y hidden
      background-color #fff
      border-top 1px solid #dce5e7
      border-bottom 1px solid #dce5e7
      /*ul空！控制滚动条左右滑动显示更多*/
      .history-items
        margin-top .3rem
        width 605px
        /*搜索内容の每项*/
        .history-item
          padding 0 .15rem
          float left
          margin-left .2rem
          max-width 2.89rem
          height .6rem
          line-height .6rem
          color #333
          border .01rem solid #c9cccd
          border-radius 3px
          text-align center
          ellipsis()
</style>
