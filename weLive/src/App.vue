<template>
  <div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div> 
</template>

<script>
  import VHeader from '@/components/header/header'
  import VFooter from '@/components/footer/footer'
  import {path_cofig} from '@/assets/js/path'

  export default {
    name: 'app',
    components: {
      VHeader
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  #app 
    font-family: '微软雅黑', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
</style>
