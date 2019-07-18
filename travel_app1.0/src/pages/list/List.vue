<template>
  <div class="common-wrap list-wrap">
    <list-header></list-header>
    <list-main></list-main>
  </div>
</template>

<script>
import ListHeader from './component/ListHeader'
import ListMain from './component/ListMain'

export default {
  name: 'List.vue',
  components: {
    ListHeader, // 头部
    ListMain // 主体
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

</style>
