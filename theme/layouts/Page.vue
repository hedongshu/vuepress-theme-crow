<template>
	<div>
		<div class="page-header">
			<h2>{{ $page.title }}</h2>
			<div class="updateInfo">
				<icon-font
				 class="infoIcon"
				 icon-class="shijian"
				/>
				<!-- <span>{{ $page.lastUpdated }}</span> -->
				<span>2017-05-08</span>
			</div>
		</div>
		<div class="page-body">
			<Content />
		</div>
	</div>
</template>

<script>
export default {};
</script>
<style lang="stylus" src="../styles/page.styl">
</style>

