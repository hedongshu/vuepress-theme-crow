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
					<span>{{ $page.lastUpdated }}</span>
				</div>
			</header>
			<div class="post-body">
				<p class="post-excerpt">{{ excerpt }}</p>

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
export default {
	props: ["items"],
	data() {
		return {
			excerpt: `简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介`
		};
	}
};
</script>
<style lang="stylus" src="../styles/posts.styl">
</style>
