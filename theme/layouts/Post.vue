<template>
	<div>
		<div class="post-header">
			<h2>{{ $page.title }}</h2>
			<div class="updateInfo">
				<icon-font
				 class="infoIcon"
				 icon-class="shijian"
				/>
				<span>{{ $page.lastUpdated }}</span>
			</div>
		</div>
		<div class="post-body">
			<Content />
		</div>
	</div>
</template>

<script>
export default {
	name: "Post"
};
</script>
<style scoped lang="stylus" src="../styles/post.styl">
</style>

