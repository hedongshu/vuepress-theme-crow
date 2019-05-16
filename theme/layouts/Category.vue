<template>
	<div>
		<h2>当前分类: "{{currentName}}" , 共有{{$category.posts.length}}篇文章</h2>
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
