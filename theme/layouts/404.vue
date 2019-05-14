<template>
	<div class="main-div not-found">
		<h1>404 Not Found</h1>

		<p>{{ text }}</p>
	</div>
</template>

<script>
export default {
	data() {
		return {
			text: "你来错了"
		};
	}
};
</script>

<style lang="stylus" scoped>
.not-found {
	text-align: center;
}
</style>
