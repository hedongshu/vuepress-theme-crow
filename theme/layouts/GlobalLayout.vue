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
import Home from "./Home";
import SearchBox from "@SearchBox";
import Page from "./Page";

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
		SearchBox
	},
	computed: {
		layout() {
			if (this.$page.path) {
				if (this.$frontmatter.layout) {
					// 你也可以像默认的 globalLayout 一样首先检测 layout 是否存在
					return this.$frontmatter.layout;
				}
				return "post";
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


