<template>
  <header class="common-header border-bottom">
    <!--1.1 返回-->
    <router-link to="/">
      <span class="iconfont iconfanhui typing-back"></span>
    </router-link>
    <!--1.2 输入框-->
    <div class="typing-input">
      <input class="search" type="text" placeholder="输入城市或景点">
    </div>
    <!--1.3 搜索-->
    <a class="typing-btn" href="">搜索</a>
  </header>
</template>

<script>
export default {
  name: 'SearchHeader'
}
</script>

<style scoped rel="stylesheet/stylus" lang="stylus">
  @import '~style/varibles.styl'
  /*1.返回按钮*/
  .typing-back
    width .4rem
    padding 0 .2rem
    font-size .36rem
    color $text
    font-weight 600
  /*2.输入框*/
  .typing-input
    margin .14rem 0
    padding 0 .6rem 0 .2rem
    flex 1
    height .6rem
    line-height .6rem
    border-radius .3rem
    background-color #f2f2f2
    .search
      background-color transparent
      text-align center
  /*3.搜索按钮*/
  .typing-btn
    padding 0 .1rem
    margin-right .04rem
    width .74rem
    font-size .28rem
    color $textMainTitle
</style>
