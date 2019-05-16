<template>
	<div class="sideBar">
		<transition enter-active-class="animated fadeInDown">
			<div
			 class="sideBar-inner"
			 v-show="sideOpened"
			>
				<section>
					<!-- 头像,骚话 -->
					<div class="info-box">
						<div></div>
						<span>嘻嘻嘻嘻</span>
					</div>
					<!-- 导航 -->
					<nav class="nav-box">

						<router-link
						 to="/"
						 class="side-nav-item"
						>
							<span class="side-nav-number">{{$pagination._posts.length}}</span>
							<span class="side-nav-describe">文章</span>
						</router-link>
						<router-link
						 to="/category/"
						 class="side-nav-item"
						>
							<span class="side-nav-number">{{ $categories.length }}</span>
							<span class="side-nav-describe">分类</span>
						</router-link>
						<router-link
						 to="/tag/"
						 class="side-nav-item"
						>
							<span class="side-nav-number">{{$tags.length}}</span>
							<span class="side-nav-describe">标签</span>
						</router-link>
					</nav>

					<!-- 社交 -->
					<div class="social-box">
						<ul>
							<li></li>
							<li></li>
							<li></li>
						</ul>
					</div>
				</section>
			</div>

		</transition>
	</div>

</template>

<script>
export default {
	props: ["sideOpened"],
	data() {
		return {};
	},
	created() {
		console.log(this.$categories.length);
	}
};
</script>

<style lang="stylus" src='../styles/sideBar.styl'>
</style>

<style>
</style>

