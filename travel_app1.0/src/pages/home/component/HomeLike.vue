<template>
  <div class="home-like common-group-wrap">
    <!--模块总标题（通用）-->
    <div class="common-group-title">
      <img class="common-title-img" src="http://img1.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png" alt="">
      <span class="common-title-text">猜你喜欢</span>
    </div>
    <!--模块列表-->
    <ul class="like-lists">
      <li class="like-item border-bottom"
          v-for="item of likeList"
          :key="item.id"
      >
        <a class="full-link" href="">
          <div class="like-item-img">
            <img class="like-item-img-cnt" :src="item.imgUrl" :alt="item.title">
          </div>
          <main class="like-info">
            <p class="like-info-title">{{ item.title }}</p>
            <p class="like-info-comment">{{ item.comment }}</p>
            <div class="like-info-other">
              <span class="price">{{ item.price }}</span>起
              <span class="site">{{ item.site }}</span>
            </div>
            <p class="desc" v-show="item.feature !== ''">
              <span>{{item.feature}}</span>
            </p>
          </main>
        </a>
      </li>
    </ul>
    <!--更多-->
    <a class="home-like-more border-top" href="">查看所有产品</a>
  </div>
</template>

<script>
export default {
  name: 'HomeLike',
  props: {
    likeList: Array
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import "~style/varibles.styl"
@import "~style/mixins.styl"

.border-bottom::before,
.border-top::before
  border-color #e0e0e0
.home-like
  background-color $bgWhite
  .like-lists
    margin-left .24rem
    .like-item
      position relative
      overflow hidden
      padding .2rem 0
      width 100%
      /*图片*/
      .like-item-img
        float left
        width 2rem
        height 2rem
        overflow hidden
        .like-item-img-cnt
          width 100%
      /*相关信息*/
      .like-info
        padding-left .22rem
        overflow hidden
        color $text
        .like-info-title
          margin-top .26rem
          height .44rem
          line-height .44rem
          font-size .32rem
          color $textMainTitle
          ellipsis()
        .like-info-comment
          margin-top .14rem
          height .34rem
          line-height .34rem
          font-size .24rem
          color $textSub
        .like-info-other
          position relative
          margin-top .22rem
          height .4rem
          line-height .4rem
          font-size .24rem
          .price
            color $colorMainOrange
            font-size .4rem
          .site
            position absolute
            right .24rem
            bottom 0
      /*描述*/
      .desc
        margin-top .48rem
        margin-right .24rem
        ellipsis()
        span
          color $colorMainRed
          background-color #fff9f9
          padding .1rem 0
    .like-item:last-child::before
      border none
  .home-like-more
    display block
    width 100%
    line-height .4rem
    padding .2rem 0
    text-align center
</style>
