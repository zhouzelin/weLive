<template>
	<div id="header">
		<div class="title">{{header.title}}</div>
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
		display flex
		.icon
			flex 0 0 40px
			color #fff
			line-height 44px
			text-align center
		.title
			flex-grow 1
			text-align center
			font-size 18px
			color #ffffff
			line-height 44px
</style>