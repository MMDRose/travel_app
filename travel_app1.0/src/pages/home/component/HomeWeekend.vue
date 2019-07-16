<template>
  <div class="home-weekend">
    <!--模块总标题（通用）-->
    <div class="common-group-title">
      <span class="common-title-text">周末去哪儿</span>
    </div>
    <!--模块列表-->
    <ul class="weekend-lists">
      <li class="weekend-item"
          v-for="item of weekendList"
          :key="item.id"
      >
        <a class="full-link">
          <div class="weekend-img">
            <img class="weekend-img-cnt"
                 :src="item.imgUrl"
                 :alt="item.title"
            >
          </div>
          <div class="weekend-info">
            <h2 class="weekend-info-title">{{ item.title }}</h2>
            <p class="weekend-info-desc">{{ item.desc }}</p>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  props: {
    weekendList: Array
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import "~style/varibles.styl"
@import "~style/mixins.styl"
.common-group-title
  padding-left .26rem
.weekend-lists
  .weekend-item
    width 100%
    position relative
    margin-bottom .1rem
    background-color $bgWhite
    .weekend-img
      width 100%
      height 0
      padding-bottom 37.4375%
      overflow hidden
      .weekend-img-cnt
        width 100%
    .weekend-info
      width 100%
      box-sizing border-box
      padding .14rem .2rem .2rem .2rem
      .weekend-info-title
        line-height .48rem
        padding-right 1.4rem
        color $textMainTitle
        font-size .28rem
        ellipsis()
      .weekend-info-desc
        line-height .42rem
        padding-right 1.4rem
        color $text
        font-size .24rem
        ellipsis()
</style>
