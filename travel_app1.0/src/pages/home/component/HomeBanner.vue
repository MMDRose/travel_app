<template>
  <div class="home-banner">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide
        v-for="item of swiperList"
        :key="item.id"
      >
        <img class="swiper-img" :src="item.imgUrl" alt="">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeBanner',
  props: {
    swiperList: Array
  },
  data () {
    return {
      swiperOption: {
        autoplay: 3000,
        loop: true,
        pagination: '.swiper-pagination' // 将页码控制传进来
      }
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import "~style/varibles.styl"
.home-banner >>> .swiper-pagination-bullet
  background-color #f5f5f5
  opacity .5
.home-banner >>> .swiper-pagination-bullet-active
  background-color $bgWhite
  opacity 1
.home-banner
  overflow hidden
  width 100%
  height 0
  padding-bottom 31.25%
  background-color #eee
  .swiper-img
    width 100%

</style>
