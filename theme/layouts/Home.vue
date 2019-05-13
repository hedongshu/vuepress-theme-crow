<template>
	<posts :items='pages' />
</template>

<script>
export default {
	name: "Home",
	data() {
		return {};
	},
	computed: {
		pages() {
			return this.$pagination._posts;
		}
	}
};
</script>



