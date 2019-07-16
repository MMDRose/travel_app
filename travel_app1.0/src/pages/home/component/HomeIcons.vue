<template>
  <div class="home-icons">
    <swiper :options="swiperOption" >
      <!-- slides -->
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icon-chip" v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-cnt"
                 :src="item.imgUrl"
                 :alt="item.desc">
          </div>
          <p class="icon-desc">{{ item.desc }}</p>
        </div>
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  props: {
    iconList: Array
  },
  data () {
    return {
      swiperOption: {
        autoplay: false,
        loop: false,
        pagination: '.swiper-pagination' // 将页码控制传进来
      }
    }
  },
  computed: {
    // pages 是由函数返回的内容
    // 循环瓷片区列表数组
    // 对icon的每一项数据进行循环，item-具体循环项，index-循环项对应下标
    // page 表示 当前下标对应的数据应该展示在轮播区域的第几页
    // 下标除8，向下取整。8/8=1为第1页，7/8=0为第0页
    // 将一个一维数组拆分成二维数组，页码和对应数据项做关联
    pages () {
      const pages = []
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import "~style/varibles.styl"
@import "~style/mixins.styl"
/* 轮播控制点 位置*/
.home-icons >>> .swiper-container-horizontal > .swiper-pagination-bullets
  bottom 6px
.home-icons >>> .swiper-container-horizontal .swiper-pagination-bullet
  width 6px
  height 6px
.home-icons >>> .swiper-pagination-bullet-active
  background rgba(0,175,190,.8)

/*保证Swiper插件的高度和瓷片区高度一致*/
.home-icons >>> .swiper-container
  width 100%
  height 0
  padding-bottom 56%
  background-color $bgWhite
.icon-chip
  overflow hidden
  position relative
  float left
  width 25%
  height 0
  padding-bottom 25%
  text-align center
  .icon-img
    position absolute
    top .18rem
    left 0
    right 0
    /*bottom 0.24rem*/
    bottom 0rem
    box-sizing border-box
    .icon-img-cnt
      display inline-block
      height 68%
  .icon-desc
    position absolute
    left 0
    right 0
    bottom .1rem
    height .44rem
    line-height .44rem
    font-size 0.28rem
    ellipsis()

</style>
