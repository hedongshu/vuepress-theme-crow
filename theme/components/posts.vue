<template>
	<div>
		<div
		 class="post-block"
		 v-for="(item, index) in items"
		 :key="index"
		>
			<header class="post-header">
				<h2 class="post-title">
					<router-link
					 class="post-title-link"
					 :to="item.path"
					>
						{{ item.title }}
					</router-link>
				</h2>
				<div class="updateInfo">
					<icon-font
					 class="infoIcon"
					 icon-class="shijian"
					/>
					<span>创建日期: {{ getCreateDate(item.frontmatter.date) }}</span>

					<span v-show="item.lastUpdated">
						<icon-font
						 class="infoIcon"
						 icon-class="shijian"
						/>
						<span>最近更新: {{ item.lastUpdated }}</span>
					</span>
				</div>
			</header>
			<div class="post-body">
				<p
				 class="post-excerpt content"
				 v-html="item.excerpt"
				>
				</p>

				<router-link
				 class="post-btn"
				 :to="item.path"
				>
					阅读全文 »
				</router-link>
			</div>

		</div>
	</div>
</template>

<script>
const moment = require("moment");

export default {
	props: ["items"],
	data() {
		return {};
	},
	methods: {
		getCreateDate(timestamp) {
			console.log(timestamp);
			return moment(timestamp).format("YYYY-M-D");
		}
	}
};
</script>
<style lang="stylus" src="../styles/posts.styl">
</style>
