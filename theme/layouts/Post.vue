<template>
	<div>
		<div class="post-header">
			<h2>{{ $page.title }}</h2>
			<div class="updateInfo">

				<icon-font
				 class="infoIcon"
				 icon-class="shijian"
				/>
				<span>创建日期: {{ createDate }}</span>

				<span v-show="$page.lastUpdated">
					<icon-font
					 class="infoIcon"
					 icon-class="shijian"
					/>
					<span>最近更新: {{ $page.lastUpdated }}</span>
				</span>

			</div>
		</div>
		<div class="post-body">
			<Content />
		</div>
	</div>
</template>

<script>
const moment = require("moment");

export default {
	name: "Post",
	computed: {
		createDate() {
			return moment(this.$frontmatter.date).format("YYYY-M-D");
		}
	}
};
</script>
<style scoped lang="stylus" src="../styles/post.styl">
</style>

