<template>
  <div class="list-main">
    <!--1. 列表-->
    <div class="list-cnt">
      <ul>
        <li class="list-item common-group-wrapb border-bottom">
          <div class="list-item-cnt">
            <a class="full-link">
              <!--1.1 商品图-->
              <div class="sight-item-img">
                <img class="sight-item-img-cnt" src="https://imgs.qunarzz.com/sight/p0/1505/b0/b0132e78efa00572.water.jpg_110x110_00f7a110.jpg" alt="item.title">
              </div>
              <!--1.2 相关信息-->
              <main class="sight-info">
                <p class="sight-info-title">title</p>
                <p class="sight-info-comment">评论数：456456</p>
                <div class="sight-info-other">
                  <span class="price">price</span>起
                  <span class="site">item.site</span>
                </div>
                <p class="desc">
                  <span>item.feature</span>
                </p>
              </main>
            </a>
          </div>
        </li>
      </ul>
    </div>
    <!--2. 页码-->
    <footer class="list-pagination"></footer>
  </div>
</template>

<script>
export default {
  name: 'ListMain'
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import "~style/varibles.styl"
@import "~style/mixins.styl"

/*li*/
.list-item
  width 100%
  .list-item-cnt
    overflow hidden
    padding .2rem .22rem
    /*图片*/
    .sight-item-img
      float left
      width 2rem
      height 2rem
      overflow hidden
      .sight-item-img-cnt
        width 100%
    /*相关信息*/
    .sight-info
      position relative
      padding-left .2rem
      overflow hidden
      /*标题*/
      .sight-info-title
        height .44rem
        line-height .44rem
        font-size .32rem
        color $textMainTitle
        ellipsis()
      /*评价*/
      .sight-info-comment
        margin-top .14rem
        height .34rem
        line-height .34rem
        font-size .24rem
        color $textSub
      /*其他信息*/
      .sight-info-other
        position relative
        margin-top .18rem
        height .4rem
        line-height .4rem
        font-size .24rem
        /*价格*/
        .price
          color $colorMainOrange
          font-size .4rem
        /*地理坐标*/
        .site
          position absolute
          right .24rem
          bottom 0
    /*描述*/
    .desc
      margin-top .18rem
      margin-right .24rem
      ellipsis()
      span
        color $blue
        background-color $lightBlue
        padding .05rem .1rem
        box-sizing border-box
        font-size .24rem
</style>
