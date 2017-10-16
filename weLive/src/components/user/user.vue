<template>
	<div id="user">
		<v-header :header="header"></v-header>
		<router-link class="header" to="/user/userinfo" tag="div">
			<div class="pic-box"></div>
			<div class="user-name">方木大神</div>
		</router-link>
		<div class="block-group">
			<div class="item">
				<span class="icon icon-clipboard"></span>
				<span class="text">缴费记录</span>
			</div>
		</div>
		<div class="block-group">
			<div class="item border-1px">
				<span class="icon icon-file-text"></span>
				<span class="text">帖子</span>
			</div>
			<div class="item border-1px">
				<span class="icon icon-images"></span>
				<span class="text">相册</span>
			</div>
			<div class="item border-1px">
				<span class="icon icon-cart"></span>
				<span class="text">订单</span>
			</div>
			<div class="item border-1px">
				<span class="icon icon-book"></span>
				<span class="text">日志</span>
			</div>
		</div>
		<div class="block-group">
			<div class="item">
				<span class="icon icon-stack"></span>
				<span class="text">设置</span>
			</div>
		</div>
	</div>
</template>

<script>
	import VHeader from '@/components/header/header'

	export default {
		name: 'user',
		data() {
			return {
				header: {
					title:'我的'
				}
			}
		},
		components: {
			VHeader
		}
	}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
	@import '../../assets/stylus/min.styl'

	#user
		position absolute
		left 0
		top 0
		bottom 49px
		overflow hidden
		width 100%
		background #eee
		.header
			height 115px
			color #fff
			background url('background.jpg') no-repeat center center
			background-size cover
			overflow hidden
			.pic-box
				margin 10px auto
				width 60px
				height 60px
				border 2px solid #fff
				border-radius 50%
				background #0af
				position relative
			.user-name 
				text-align center
				font-size 20px
				margin-bottom 5px
		.block-group
			background #fff
			margin-top 20px
			padding-left 20px
			.item
				border-1px(#ddd)		
				height 40px
				line-height 40px
				&:only-child
					&:after 
						display none;
				.icon 
					margin-right 10px		
					color #0af
					vertical-align text-bottom
</style>