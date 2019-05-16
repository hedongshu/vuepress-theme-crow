<template>
	<div>
		<h2>当前标签: "{{currentName}}" , 共有{{$tag.posts.length}}篇文章</h2>
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
