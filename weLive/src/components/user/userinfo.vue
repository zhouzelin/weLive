<template>
	<div id="userinfo">
		<v-header :header="header"></v-header>	
	</div>
</template>

<script>
	import VHeader from '@/components/header/header'

	export default {
		data() {
			return {
				header: {
					title: '个人信息',
					leftIcon: 'icon-arrow_lift',
					backUrl: '/user'
				}
			}
		},
		mounted() {
			
		},
		methods: {

		},
		components: {
			VHeader
		}
	}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
		#userinfo
			position absolute
			top 0
			bottom 0
			left 0
			width 100%
			background #eee
			z-index 2
</style>