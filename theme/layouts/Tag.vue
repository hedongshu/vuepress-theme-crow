<template>
	<div class="tag">
		<p>{{$tag.posts.length}} 篇文章包含「{{currentName}}」 标签</p>
		<posts :items='$tag.posts' />
	</div>
</template>

<script>
export default {
	name: "Tag",
	computed: {
		currentName() {
			return this.$category.path.match(/.\/(.+)\.html/)[1];
		}
	}
};
</script>

<style lang="stylus" scoped>
.tag>p {
	text-align: center;
	font-size: 18px;
}
</style>