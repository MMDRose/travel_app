<!--
  -- 1. 传递点击字母给父组件，父组件再传给city-listの子组件
  --  通过watch方法实时监听点击字母的变化
  --  通过better-scroll方法：
  --  字母标题绑定元素 :ref = "key"
  --    if (this.scroll) {
  --      const element = this.$refs[this.letter][0]
  --      this.scroll.scrollToElement(element)
  --    }
  --  2. 实现通过上下拖动字母列表实时改变城市列表项功能
  --    touch事件：touchstart，touchmove，touchend
  --
-->
<template>
  <!--字母列表-->
  <!--此处也绑定了ref，获取DOM-->
  <!--此处修改v-for循环の值，computed绑定的方法-->
  <ul class="alcohol-letter">
    <li class="letter-item"
        v-for="item of getLettersList"
        :key="item"
        :ref="item"
        @click="handleClickLetter"
        @touchstart="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
    >{{ item }}</li>
  </ul>
</template>

<script>
export default {
  name: 'AlcoholLetter',
  props: {
    cityList: Object // 城市列表--获取字母表
  },
  data () {
    return {
      touchStatus: false, // 手指触摸事件，默认不启动
      startY: 0, // 初始startY为0
      timer: null // 由于手指滑动导致函数执行频率很高，故通过节流限制函数执行的频率
    }
  },
  // 由于数据更改导致的虚拟DOM重新渲染和打补丁，在这之后会调用该钩子
  updated () {
    // 整个视图都重新绘制完毕
    this.$nextTick(function () {
      this.startY = this.$refs['A'][0].offsetTop // 获取字母A距离页面顶部距离
    })
  },
  computed: {
    getLettersList () {
      const letters = [] // 定义一个空数组，存放字母
      for (let i in this.cityList) {
        letters.push(i)
      }
      return letters
      // 数组结果['a','b','c'...]
    }
  },
  methods: {
    handleClickLetter (e) {
      // 获取点击字母，并向外触发事件
      this.$emit('change', e.target.innerText)
    },
    handleTouchStart () {
      this.touchStatus = true // 当手指触摸时，开启触摸事件
    },
    // 只有当触摸事件开启时，才做相应的判断
    handleTouchMove (e) {
      /**
       * 处理思路：
       * ① 获取字母A距离页面顶部距离
       * ② 获取手指位置距离页面顶部距离
       * ③ 取两者の差值
       * ④ 用差值除以每个字母占用の高度
       * ⑤ 可以获得1,2,3,4,5等数值
       * ⑥ 以此得到具体の字母
      */
      if (this.touchStatus === true) {
        // 节流方式
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY // handleTouchMove方法中の e.touches[0]就代表手指的位置
          const index = Math.floor((touchY - this.startY) / 20) // 下标--20为每个字母の高度，Math.floor()向下取整
          if (index >= 0 && index < this.getLettersList.length) { // 由于滑动的范围可能在字母区域之外，所以需要有所限制
            this.$emit('change', this.getLettersList[index]) // 向外触发index下标对应的字母，如P，L，S，M，A...
          }
        }, 16)
        // 原写法：
        // 以下写法性能较低，每次都需要计算，故提取到update钩子函数中
        // const startY = this.$refs['A'][0].offsetTop
        // const touchY = e.touches[0].clientY
        // const touchY = e.touches[0].clientY - 79 // 此处の79位顶部header高度
        // const index = Math.floor((touchY - this.startY) / 20)
        // if (index >= 0 && index < this.getLettersList.length) {
        //   this.$emit('change', this.getLettersList[index])
        // }
      }
    },
    handleTouchEnd () {
      this.touchStatus = false // 当手指结束滑动，关闭触摸事件
    }
  }
}
</script>

<style scoped rel="stylesheet/stylus" lang="stylus">
  @import "~style/varibles.styl"
 .alcohol-letter
    position absolute
    top 0
    right 0
    bottom 0
    display flex
    flex-direction column
    justify-content center
    width .4rem
    .letter-item
      line-height .4rem
      color $colorMainGreen
      text-align center
</style>
