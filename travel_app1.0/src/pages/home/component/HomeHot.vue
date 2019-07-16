<template>
  <div class="common-group-wrap home-hot">
    <!--模块总标题（通用）-->
    <div class="common-group-title">
      <img class="common-title-img" src="http://img1.qunarzz.com/piao/fusion/1711/16/bfbb9874e8f11402.png" alt="">
      <span class="common-title-text">本周热门榜单</span>
      <a class="common-title-more" href="">
        <span class="more-detail">全部榜单</span>
        <span class="iconfont icon-enter"></span>
      </a>
    </div>
    <!--模块列表-->
    <ul class="common-group-lists hotsale-lists">
      <li class="hot-item"
          v-for="item of hotList"
          :key="item.id"
      >
        <a class="hot-item-link full-link" href="">
          <div class="hot-item-img">
            <img class="hot-item-img-cnt" :src="item.imgUrl" :alt="item.title">
          </div>
          <p class="hot-item-sight">{{ item.title }}</p>
          <p class="hot-item-price">
            <span class="price">{{ item.price }}</span>起
          </p>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeHot',
  props: {
    hotList: Array
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import "~style/varibles.styl"
@import "~style/mixins.styl"

.hot-item
  position relative
  display inline-block
  padding .06rem 0 .2rem
  width: 2rem
  .hot-item-img
    width 2rem
    height 0
    padding-bottom 100%
    overflow hidden
    .hot-item-img-cnt
      width 100%
  .hot-item-sight
    margin-top .12rem
    line-height .32rem
    font-size .24rem
    color $textMainTitle
    text-align center
    ellipsis()
  .hot-item-price
    line-height .36rem
    text-align center
    color $textSub
    .price
      color $colorMainOrange
.hot-item:not(:first-child)
  margin-left .12rem
</style>
