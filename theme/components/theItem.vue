<template>
	<div>
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
