<template>
	<div
	 class="container"
	 :class="{slideOpenedContainer: slideOpened}"
	>
		<div class="main">
			<theHeader />

			<div class="main-inner">
				<component :is="layout" />
			</div>

			<theFooter />
			<div
			 id="slide"
			 :class="{slideOpened: slideOpened}"
			></div>

			<a
			 href="###"
			 @click="toggleSlide"
			 class="toggleButton"
			>{{ slideOpened ? '关闭' : '展开'}}</a>
		</div>
	</div>
</template>
<script>
import theHeader from "./theHeader";
import SearchBox from "@SearchBox";
import Home from "./Home";
import Post from "./Post";

export default {
	name: "hdsTheme",

	data() {
		return {
			slideOpened: false
		};
	},
	components: {
		theHeader,
		Home,
		SearchBox,
		Post
	},
	computed: {
		layout() {
			if (this.$page.path) {
				if (this.$frontmatter.layout) {
					// 你也可以像默认的 globalLayout 一样首先检测 layout 是否存在
					console.log("layout:::", this.$frontmatter.layout);
					return this.$frontmatter.layout;
				}
				console.log("没有设置layout");
				return "Post";
			}
			return "404";
		}
	},
	methods: {
		toggleSlide() {
			this.slideOpened = !this.slideOpened;
		}
	}
};
</script>
<style lang="stylus" src="../styles/layout.styl">
</style>


