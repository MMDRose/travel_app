<template>
  <div class="common-header home-header">
    <!--1. 定位-->
    <router-link tag="div" to="/city" class="site">
      <span class="current">{{ city }}</span>
      <span class="iconfont icon-arrow-down"></span>
    </router-link>
    <!--2. 搜索-->
    <router-link tag="div" to="/search" class="search">
      <span class="iconfont icon-search"></span>
      <span>输入城市/景点</span>
    </router-link>
    <!--3. 更多-->
    <div class="more" @click="handleShowMore">
      <span class="iconfont icon-more"></span>
    </div>
    <!--4. 更多功能-->
    <div class="more-cnt" v-show="ifShowMore">
      <div class="arrow-up"></div>
      <ul class="feature">
        <li class="feature-item"><span class="iconfont icon-info feature-icon"></span><span class="feature-title">消息</span></li>
        <li class="feature-item"><span class="iconfont icon-like feature-icon"></span><span class="feature-title">收藏</span></li>
        <li class="feature-item"><span class="iconfont icon-coupon1 feature-icon"></span><span class="feature-title">代金券</span></li>
        <li class="feature-item"><span class="iconfont icon-track feature-icon"></span><span class="feature-title">足迹</span></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  data () {
    return {
      ifShowMore: false, // 控制模块显隐
      city: '' // 当前城市
    }
  },
  methods: {
    // 控制显隐更多功能
    handleShowMore () {
      this.ifShowMore = !this.ifShowMore
    }
  },
  mounted () {
    var _this = this // this的作用域发生了改变
    this.$root.bus.$on('change', (city) => {
      _this.city = city
      console.log('home header1' + city)
      console.log('home header2' + _this.city)
      return _this.city
    })
    console.log('home header3' + _this.city)
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import "~style/varibles"
.home-header
  position fixed
  top 0
  left 0
  text-align center
  color $text
  /*1. 定位 L*/
  .site
    width 1.28rem
    margin-right .1rem
    margin-left .1rem
    font-size .3rem
    .icon-arrow-down
      font-size 12px
  /*2. 搜索 C*/
  .search
    flex 1
    height:0.6rem
    line-height:.6rem
    margin:.14rem 0
    padding 0 .3rem
    text-align left
    border-radius .5rem
    color $textSub
    background-color $bgLightGray
    .icon-search
      font-size 18px
  /*3. 更多 R*/
  .more
    width .9rem
    z-index 2
  /*3.1 更多内容展示*/
  .more-cnt
    /*3.1.1 箭头（绝对定位）*/
    .arrow-up
      position absolute
      top .28rem
      right .26rem
      width 0
      height 0
      border-width .2rem
      border-style solid
      border-color transparent transparent rgba(0,0,0,.5) transparent
    /*3.1.2 选项卡（绝对定位）*/
    .feature
      position absolute
      top .68rem
      right .1rem
      width 2.2rem
      background-color rgba(0,0,0,.5)
      border-radius $borderRadius
      .feature-item
        text-align center
        color $textWhite
        .feature-icon
          padding-left .1rem
          font-size 18px
        .feature-title
          padding-left .26rem
          box-sizing border-box
          width 1.2rem
          text-align left
        .icon-info
          font-size 20px

</style>
