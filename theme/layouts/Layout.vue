<template>
	<div>
		<theHeader />
		<Home />
	</div>
</template>
<script>
import theHeader from "./theHeader";
import Home from "./Home";
import SearchBox from "@SearchBox";

export default {
	name: "hdsTheme",

	data() {
		return {};
	},
	components: {
		theHeader,
		Home,
		SearchBox
	},
	created() {},
	computed: {}
};
</script>
<style lang="stylus" src="../styles/layout.styl"></style>

