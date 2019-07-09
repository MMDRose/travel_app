<template>
  <header class="common-header city-header">
    <!--1.1 返回-->
    <router-link to="/">
      <span class="iconfont icon-back common-header-back"></span>
    </router-link>
    <!--1.2 输入框-->
    <h1 class="common-header-title city-title">城市选择</h1>
  </header>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style scoped rel="stylesheet/stylus" lang="stylus">
  @import "~style/varibles.styl"
  /*reset header */
  .city-header
    position fixed
    top 0
    left 0
    background-color $bgMainGreen
    .common-header-back,
    .city-title
      color #fff
</style>
