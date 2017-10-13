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

		}
	}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
	#header
		height: 44px
		background: #00aaff
		.title
			text-align: center
			font-size: 18px
			color: #ffffff
			line-height: 44px
</style>