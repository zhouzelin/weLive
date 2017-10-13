<template>
  <div>
    <v-header :header="header"></v-header>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <v-footer></v-footer>
  </div> 
</template>

<script>
  import VHeader from '@/components/header/header'
  import VFooter from '@/components/footer/footer'

  export default {
    name: 'app',
    data() {
      return {
        header: {
          title: ''
        }
      }
    },
    mounted() {
      this.changeTitle()
    },
    updated() {
      this.changeTitle()
    },
    methods: {
      changeTitle() {
        const Regx = /(\w+)$/;
        let path = window.location.href;
        let res = Regx.exec(path)[1];
        switch(res) {
          case 'home':
            this.header.title = '微邻'
            break;
          case 'group':
            this.header.title = '圈子'
            break;
          case 'discovery':
            this.header.title = '发现'
            break;
          case 'user':
            this.header.title = '我的'
            break;
        }
      }
    },
    components: {
      VHeader,
      VFooter
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  #app 
    font-family: '微软雅黑', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
</style>
