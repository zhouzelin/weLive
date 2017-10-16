<template>
	<div id="footer">
			<router-link class="item" tag="div" to="/home">
				<div class="icon icon-home"></div>
				<div class="text">微邻</div>
			</router-link>
			<router-link class="item" tag="div" to="/group">
				<div class="icon icon-pacman"></div>
				<div class="text">圈子</div>
			</router-link>
			<router-link class="item" tag="div" to="/discovery">
				<div class="icon icon-safari"></div>
				<div class="text">发现</div>
			</router-link>
			<router-link class="item" tag="div" to="/user">
				<div class="icon icon-users" tag="div"></div>
				<div class="text">我的</div>
			</router-link>
	</div>
</template>

<script>
	export default {
		name: 'footer'
	}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
	#footer
		position: fixed
		bottom: 0
		left: 0 
		display: flex
		width: 100%
		height: 49px
		border-top: 0.5px solid #dddddd
		align-items: center		
		.item 
			flex: 1
			&.active
				.icon
					color: #0af
				.text
					color: #0af
			.icon
				text-align: center
				font-size: 20px
				margin-bottom: 5px
				color: #999
			.text
				font-size: 12px	
				text-align: center
				color: #999
</style>