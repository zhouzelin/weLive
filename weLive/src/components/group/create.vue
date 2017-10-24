<template>
	<div id="GroupCreate">
		<v-header :header="header">
			<div class="btn">完成</div>
		</v-header>
		<div class="text-wrapper">
			<textarea placeholder="这一刻的想法"></textarea>
			<div class="pic-box">
				<div class="item border-1px">
					<img src="../../../static/image/fruit.jpg">
				</div>
				<div class="item border-1px">
					<div class="icon-add"></div>
				</div>
			</div>
			<div class="location"><span class="icon icon-location"></span>所在位置</div>
		</div>
	</div>
</template>

<script>
	import VHeader from '@/components/header/header'

	export default {
		data() {
			return {
				header: {
					title: '发布圈子',
					licon: 'icon-arrow_lift',
          leftGo: '/group'
				}
			}
		},
		components: {
			VHeader
		}
	}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
	#GroupCreate
		position absolute
		top 0
		bottom 0
		left 0
		width 100%
		background #eee  
		#header
			.btn
				position absolute
				top 50%
				right 10px
				color #fff
				font-size 14px
				background #000
				width 50px
				height 24px
				line-height 24px
				text-align center
				border-radius 4px
				transform translate(0, -50%)
		.text-wrapper
			background #fff
			padding 10px
			textarea
				border none
				width 100%
				height 80px		
				resize none
		.pic-box
			display flex
			flex-wrap wrap
			.item
				width 60px
				height 60px
				border-1px(#ddd)
				img
					width 100%
					height 100%
					object-fit cover		
</style>