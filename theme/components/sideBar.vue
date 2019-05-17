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
						<img
						 class="picture"
						 :src="$withBase(getImg.path)"
						>
						<span>{{getImg.text}}</span>
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
							<li
							 v-for="(item, index) in $themeConfig.sideInfo.social"
							 :key="index"
							>

								<a
								 :href="item.link"
								 target="_blank"
								>
									<iconFont :icon-class='item.icon' />{{ item.name }}</a>

							</li>
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
	computed: {
		getImg() {
			const info = this.$themeConfig.sideInfo;
			return {
				path: info.picturePath,
				text: info.infoText || this.$title
			};
		}
	}
};
</script>

<style lang="stylus" src='../styles/sideBar.styl'>
</style>

<style lang="css" scoped>
.social-box .icon {
	margin: 0 3px;
}
.social-box a:hover {
	color: #909090;
}
</style>


