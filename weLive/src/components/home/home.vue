<template>
	<div id="home" ref="home">
		<div>
			<slider>
				<div class="slide-item" v-for="(item,index) in slider"><img :src="item"></div>
			</slider>
			<div class="icon-group border-1px">
				<div class="item">
					<div class="icon icon-sun"></div>
					<div class="text">天气</div>
				</div>
				<div class="item">
					<div class="icon icon-music"></div>
					<div class="text">音乐</div>
				</div>
				<div class="item">
					<div class="icon icon-mobile"></div>
					<div class="text">充值中心</div>
				</div>
				<div class="item">
					<div class="icon icon-location"></div>
					<div class="text">附近</div>
				</div>
				<div class="item">
					<div class="icon icon-man-woman"></div>
					<div class="text">活动</div>
				</div>
				<div class="item">
					<div class="icon icon-truck"></div>
					<div class="text">快递</div>
				</div>
				<div class="item">
					<div class="icon icon-cart"></div>
					<div class="text">微邻市场</div>
				</div>
				<div class="item">
					<div class="icon icon-clipboard"></div>
					<div class="text">缴费</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>	
	import BScroll from 'better-scroll'
	import Slider from '@/components/slider/slider'

	export default {
		name:'home',
		data() {
			return {
				myBScroll: null,
				slider: [
					'../../static/image/bg_1.png',
					'../../static/image/fruit.jpg',
					'../../static/image/fruit-2.png'
				]
			}
		},
		mouted() {
			initBScroll()
		},
		updated() {
			initBScroll()
		},
		methods: {
			initBScroll() {
				if(!this.myBScroll) {
						this.myBScroll = new BScroll(this.$refs.home,{
							click: true
						})
				} else {
					this.myBScroll.refresh()
				}
			}
		},
		components: {
			Slider
		}
	}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
	@import '../../assets/stylus/min.styl'

	#home
		width: 100%
		position: absolute
		top: 44px
		left: 0
		bottom: 49px
		overflow: hidden
		.icon-group
			display: flex
			flex-wrap: wrap
			border-1px(#ddd)
			.item
				display: flex
				flex: 0 0 25%
				height: 60px
				flex-direction: column;
				justify-content: center
				align-items: center
				.icon
					font-size: 22px
					margin-bottom: 10px
					&.icon-sun
						color: #ffab19
					&.icon-music
						color: #ff4343	
					&.icon-mobile
						color: #00aaff	
					&.icon-location
						color: #5ed123
					&.icon-man-woman
						color: #de1e7c		
					&.icon-truck
						color: #00aaff
					&.icon-cart
						color: #ffab19
				.text
					font-size: 12px
					color: #333
</style>