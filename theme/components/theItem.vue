<template>
	<div class="theItem">
		<router-link :to="ivalue.path">
			{{ikey}} ({{ivalue.posts.length}})
		</router-link>
	</div>
</template>

<script>
export default {
	props: ["ivalue", "ikey"],
	data() {
		return {};
	}
};
</script>

<style lang="stylus" scoped>
a {
	color: #808080;
}

a:hover {
	color: #555555;
	text-decoration: underline;
}
</style>

