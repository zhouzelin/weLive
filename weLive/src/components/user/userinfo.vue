<template>
	<div id="userinfo">
		<v-header :header="header" @leftClick="goBack()"></v-header>
    <div class="wrapper">
      <div class="item border-1px">
        <div class="label">头像</div>
        <div class="pic-box">
          <img src="../../../static/image/fruit.jpg">
        </div>
      </div>
      <div class="item">
        <div class="label">昵称</div>
        <div class="value">方木大神</div>
      </div>
      <div class="item">
        <div class="label">微邻号</div>
        <div class="value">1003695</div>
      </div>
      <div class="item">
        <div class="label">二维码名片</div>
        <div class="value"></div>
      </div>
      <div class="item">
        <div class="label">性别</div>
        <div class="value">男</div>
      </div>
    </div>
    <div class="wrapper">
      <div class="item">
        <div class="label">个性签名</div>
        <div class="value">平平凡凡的一枚程序员~</div>
      </div>
    </div>
    <div class="wrapper">
      <div class="item">
        <div class="label">房间号</div>
        <div class="value">706</div>
      </div>
    </div>
	</div>
</template>

<script>
	import VHeader from '@/components/header/header'

	export default {
		data() {
			return {
				header: {
					title: '个人信息',
					licon: 'icon-arrow_lift',
          leftGo: '/user'
				}
			}
		},
		mounted() {
		
		},
		methods: {
      goBack() {
        window.history.back();
      }
		},
		components: {
			VHeader
		}
	}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '../../assets/stylus/min.styl'  
  
	#userinfo
    position absolute
    top 0
    bottom 0
    left 0
    width 100%
    background #eee
    z-index 2  
    .wrapper
      margin-top 10px
      background #fff
      .item 
        display flex
        margin 0 10px
        align-items center
        min-height 40px
        border-1px(#eee)
        &:last-child
          border-none()
        .label
          color #333
          font-size 14px
        .value
          flex 1
          color #999
          font-size 12px  
          text-align right
        .pic-box
          flex 1
          text-align right
          img
            padding 5px 0
            width 60px
            height 60px
            object-fit cover  
</style>
