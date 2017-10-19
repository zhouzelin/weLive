<template>
	<div id="group">
		<v-header :header="header"></v-header>
		<div class="section" ref="section">
			<div>
				<div class="header-wrapper">
					<div class="background"></div>
					<div class="user-info">
						<div class="name">方木大神</div>
						<div class="avatar">
							<img src="../../../static/image/fruit.jpg">
						</div>
					</div>
				</div>
				<div class="article-box border-1px">
					<div class="img-box">
						<img src="../../../static/image/fruit.jpg">
					</div>
					<div class="wrapper">
						<div class="name">物业大叔</div>
						<div class="decription">又到了交水电费的季节！又到了交水电费的季节！又到了交水电费的季节！重要的事情说三遍</div>
						<div class="photo-album">
							<div class="item">
								<img src="../../../static/image/fruit.jpg">
							</div>
							<div class="item">
								<img src="../../../static/image/fruit.jpg">
							</div>
							<div class="item">
								<img src="../../../static/image/fruit.jpg">
							</div>
							<div class="item">
								<img src="../../../static/image/fruit.jpg">
							</div>
							<div class="item">
								<img src="../../../static/image/fruit.jpg">
							</div>
						</div>
						<div class="time"><span>1小时前</span><div class="btn">··</div></div>
						<div class="commet">
							<div class="item">
								<span class="name">一楼房客</span>:
								<span class="desc">时间过得真快！</span>
							</div>
							<div class="item">
								<span class="name">二楼房客</span>回复<span class="name">一楼房客</span>:
								<span class="desc">是啊！</span>
							</div>
						</div>
					</div>
				</div>
				<div class="article-box border-1px">
					<div class="img-box">
						<img src="../../../static/image/fruit.jpg">
					</div>
					<div class="wrapper">
						<div class="name">物业大叔</div>
						<div class="decription">又到了交水电费的季节！又到了交水电费的季节！又到了交水电费的季节！重要的事情说三遍</div>
						<div class="time"><span>1小时前</span><div class="btn">··</div></div>
						<div class="commet">
							<div class="item">
								<span class="name">一楼房客</span>:
								<span class="desc">时间过得真快！</span>
							</div>
							<div class="item">
								<span class="name">二楼房客</span>回复<span class="name">一楼房客</span>:
								<span class="desc">是啊！</span>
							</div>
						</div>
					</div>
				</div>
				<div class="article-box border-1px">
					<div class="img-box">
						<img src="../../../static/image/fruit.jpg">
					</div>
					<div class="wrapper">
						<div class="name">物业大叔</div>
						<div class="decription">又到了交水电费的季节！又到了交水电费的季节！又到了交水电费的季节！重要的事情说三遍</div>
						<div class="time"><span>1小时前</span><div class="btn">··</div></div>
						<div class="commet">
							<div class="item">
								<span class="name">一楼房客</span>:
								<span class="desc">时间过得真快！</span>
							</div>
							<div class="item">
								<span class="name">二楼房客</span>回复<span class="name">一楼房客</span>:
								<span class="desc">是啊！</span>
							</div>
						</div>
					</div>
				</div>
				<div class="article-box border-1px">
					<div class="img-box">
						<img src="../../../static/image/fruit.jpg">
					</div>
					<div class="wrapper">
						<div class="name">物业大叔</div>
						<div class="decription">又到了交水电费的季节！又到了交水电费的季节！又到了交水电费的季节！重要的事情说三遍</div>
						<div class="time"><span>1小时前</span><div class="btn">··</div></div>
						<div class="commet">
							<div class="item">
								<span class="name">一楼房客</span>:
								<span class="desc">时间过得真快！</span>
							</div>
							<div class="item">
								<span class="name">二楼房客</span>回复<span class="name">一楼房客</span>:
								<span class="desc">是啊！</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import VHeader from '@/components/header/header'
	import BScroll from 'better-scroll'

	export default {
    name: '',
    data() {
    	return {
    		header: {
    			title: '圈子',
    			ricon: 'icon-camera'
    		},
    		myScroll: null
    	}
    },
    mounted() {
    	this.initScroll()
    },
    updated() {
			this.initScroll()
    },
    methods: {
    	initScroll() {
    		if(!this.myScroll) {
    			this.myScroll = new BScroll(this.$refs.section,{
    				scrollY: true,
    				click: true
    			})
    		}else {
    			this.myScroll.refresh()
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

	#group
		.section
			position absolute
			top 44px
			bottom 49px
			left 0
			width 100%
			overflow hidden
			.header-wrapper
				padding-bottom 30px
				position relative
				.background
					height 150px
					background #000
				.user-info
					position absolute
					right 10px
					bottom 0
					display flex
					.name 
						flex 1
						padding 5px 10px
						font-size 14px
						color #fff
						font-weight 700
					.avatar
						width 60px
						height 60px
						border 1px solid #fff	
						overflow hidden
						img
							width 100%
							height 100%
							object-fit cover
			.article-box
				padding-top 30px
				padding 8px
				display flex
				border-1px(#ddd)
				.img-box
					flex 0 0 36px
					padding-right 8px
					img 
						width 36px
						height 36px 
						object-fit cover
				.wrapper
					font-size 14px
					.name
						color #2e7dcc
					.decription
						margin-top 5px	
						line-height 16px
					.photo-album
						padding-top 5px
						display flex
						flex-wrap wrap	
						width 240px
						.item
							flex 0 0 76px
							height 76px
							padding-right 4px
							padding-bottom 4px
							img
								width 100%
								height 100%
								object-fit cover	
					.time
						font-size 10px	
						padding 10px 0
						color #999
						position relative
						.btn
							position absolute
							right 0
							top 8px
							width 14px
							height 12px
							background #2e7dcc
							color #fff
							font-size 18px
							line-height 14px
							text-align center
							&:before
								display block
								content ''
								width 0
								height 0
								border 3px solid transparent
								border-right 3px solid #2e7dcc
								position absolute
								top 3px
								left -6px
					.commet
						background #eee	
						font-size 12px
						position relative
						&:before
							position absolute
							content ''
							display block
							width 0
							height 0
							border 5px solid transparent
							border-bottom 5px solid #eee
							top -10px
							left 10px
						.item
							padding 4px 10px
</style>
