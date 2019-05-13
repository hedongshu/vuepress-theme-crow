<template>

	<header class="header">
		<div class="header-inner clear">
			<div>

				<div class="header-title">
					<router-link :to="$localePath">
						<span class="logo-line-before"><i class=""></i></span>
						<span class="site-title">{{ title }}</span>
						<span class="logo-line-after"><i class=""></i></span>
					</router-link>
				</div>

				<div class="nav-toggle">
					<button>
						<span class="btn-bar"></span>
						<span class="btn-bar"></span>
						<span class="btn-bar"></span>
					</button>
				</div>
			</div>

			<div class="header-nav">
				<theNav />
			</div>

		</div>
	</header>
</template>
<script>
// import theNav from "../components/theNav";
export default {
	data() {
		return {
			title: "this is header"
		};
	},
	components: {}
};
</script>

<style lang="stylus" src="../styles/theHeader.styl">
</style>

