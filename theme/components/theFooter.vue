<template>
	<footer class="footer">
		<div class="footer-inner">
			<p>
				{{ footerText }}
			</p>
		</div>

	</footer>
</template>

<script>
export default {
	data() {
		return {};
	},
	computed: {
		footerText() {
			return "yoyoyoyo";
		}
	}
};
</script>
<style lang="stylus" src='../styles/footer.styl'>
</style>

