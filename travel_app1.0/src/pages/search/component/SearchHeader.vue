<template>
  <header class="common-header border-bottom">
    <!--1.1 返回-->
    <router-link to="/">
      <span class="iconfont icon-back header-back-search"></span>
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
  .header-back-search
    width .4rem
    padding 0 .2rem
    font-size .36rem
    color $text
    font-weight 600
  /*2.输入框*/
  .typing-input
    margin .14rem 0
    flex 1
    height .6rem
    line-height .6rem
    border-radius .3rem
    background-color #f2f2f2
    text-align center
    input.search
      padding 0 .28rem
      box-sizing border-box
      width 100%
      color $textSub
      background-color transparent
      text-align left
    input::-webkit-input-placeholder
      color $textSub
      text-align center
  /*3.搜索按钮*/
  .typing-btn
    padding 0 .1rem
    margin-right .04rem
    width .84rem
    font-size .28rem
    text-align center
    color $textMainTitle

</style>
