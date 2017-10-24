<template>
	<div id="header">
		<router-link tag="div" :to="header.leftGo||'/'" v-if="header.licon" class="left-icon" :class="header.licon"></router-link>
		<div class="title">{{header.title}}</div>
		<router-link tag="div" :to="header.rightGo||'/'" v-if="header.ricon" class="right-icon" :class="header.ricon"></router-link>
		<slot></slot>
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