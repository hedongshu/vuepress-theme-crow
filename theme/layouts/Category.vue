<template>
	<div class="category">
		<p> {{$category.posts.length}} 篇文章属于 「{{currentName}}」 分类</p>
		<posts :items='$category.posts' />
	</div>
</template>

<script>
export default {
	name: "Category",
	computed: {
		currentName() {
			return this.$category.path.match(/.\/(.+)\.html/)[1];
		}
	}
};
</script>

<style lang="stylus">
.category>p {
	text-align: center;
	font-size: 18px;
}
</style>

