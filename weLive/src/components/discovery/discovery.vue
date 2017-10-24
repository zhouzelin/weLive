<template>
	<div id="discovery">
		<v-header :header="header"></v-header>
		<v-footer></v-footer>
	</div>
</template>

<script>
	import VHeader from '@/components/header/header'
	import VFooter from '@/components/footer/footer'

	export default {
		data() {
			return {
				header: {
					title: '发现'
				}
			}
		},
		components: {
			VHeader,
			VFooter
		}
	}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
	
</style>