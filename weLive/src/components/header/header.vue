<template>
	<div id="header">
		<div v-if="header.licon" class="left-icon" :class="header.licon"></div>
		<div class="title">{{header.title}}</div>
		<div v-if="header.ricon" class="right-icon" :class="header.ricon"></div>
	</div>
</template>

<script>

	export default {
		name: 'header',
		props: {
			header: {
				type: Object
			}
		},
		methods: {
			goback() {
				
			}
		}
	}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
	#header
		height 44px
		background #00aaff
		position relative
		font-size 18px
		color #fff
		.left-icon
			position absolute
			left 10px
			top 0 
			height 44px
			line-height 44px
		.right-icon
			position absolute
			right 10px
			top 0 
			height 44px
			line-height 44px 
		.title
			text-align center
			line-height 44px
</style>