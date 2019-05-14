<template>
	<div
	 class="container"
	 :class="{sideOpenedContainer: sideOpened}"
	>
		<div class="main">
			<theHeader />

			<div class="main-inner">
				<component :is="layout" />
			</div>

			<theFooter />

		</div>

		<!-- 侧边栏 -->
		<transition name="slide">
			<sideBar v-show="sideOpened" />
		</transition>

		<a
		 href="###"
		 @click="sideOpened = !sideOpened"
		 class="toggleButton"
		>{{ sideOpened ? '关闭' : '展开'}}</a>
	</div>
</template>
<script>
import theHeader from "./theHeader";
import SearchBox from "@SearchBox";
import Home from "./Home";
import Post from "./Post";
import NotFound from "./NotFound";

export default {
	name: "hdsTheme",

	data() {
		return {
			sideOpened: false
		};
	},
	components: {
		theHeader,
		Home,
		SearchBox,
		Post,
		NotFound
	},
	computed: {
		layout() {
			if (this.$page.path) {
				console.log("layout:::", this.$frontmatter.layout);
				return this.$frontmatter.layout;
			}
			return "NotFound";
		}
	},
	methods: {
		toggleSlide() {
			this.sideOpened = !this.sideOpened;
		}
	}
};
</script>

<style src="../styles/animation.css">
</style>

<style lang="stylus" src="../styles/layout.styl">
</style>

<style>
/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
.slide-enter-active {
	transition: all 0.3s ease-in;
}
.slide-leave-active {
	transition: all 0.5s ease-out;
}
.slide-enter,
.slide-leave-to {
	transform: translateX(100%);
	opacity: 0;
}
</style>



