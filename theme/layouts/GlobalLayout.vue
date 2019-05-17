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

		<div class="side-wrap">
			<!-- 侧边栏 -->
			<transition name="slide">
				<sideBar
				 v-show="sideOpened"
				 :sideOpened="sideOpened"
				/>
			</transition>

			<!-- 侧栏开关 -->
			<div
			 class="sidebar-toggle"
			 @click="sideOpened = !sideOpened"
			 @mouseenter="toggleHover = true"
			 @mouseleave="toggleHover = false"
			 :class="animationHoveClass"
			>
				<icon-font
				 :class="{'sidebar-toggle-hover': this.toggleHover}"
				 icon-class='shangchuan'
				></icon-font>

			</div>
		</div>
	</div>
</template>
<script >
import theHeader from "./theHeader";
import SearchBox from "@SearchBox";
import Home from "./Home";
import Post from "./Post";
import NotFound from "./NotFound";
import Categories from "./Categories";
import Category from "./Category";
import Tag from "./Tag";
import Tags from "./Tags";
import Page from "./Page";

export default {
	name: "hdsTheme",

	data() {
		return {
			sideOpened: false,
			toggleHover: false
		};
	},
	methods: {
		toggleEventHander(e) {}
	},
	components: {
		theHeader,
		Home,
		SearchBox,
		Post,
		NotFound,
		Tag,
		Tags,
		Categories,
		Category,
		Page
	},
	computed: {
		layout() {
			if (this.$page.path) {
				console.log("layout:::", this.$frontmatter.layout);
				return this.$frontmatter.layout;
			}
			return "NotFound";
		},
		animationHoveClass() {
			return {
				"sidebar-toggle-open": this.sideOpened
			};
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
	transition: all 0.2s ease-in;
}
.slide-leave-active {
	transition: all 0.6s ease-out;
}
.slide-enter,
.slide-leave-to {
	transform: translateX(100%);
}
</style>



