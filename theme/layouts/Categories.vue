<template>
	<div class="categories">
		<p>当前共有{{Object.keys($categories._metaMap).length}}个分类</p>
		<ul>
			<li
			 v-for="(value, name) in $categories._metaMap"
			 :key="name"
			>
				<theItem
				 :ivalue='value'
				 :ikey="name"
				/>
			</li>
		</ul>

	</div>
</template>

<script>
export default {
	name: "Categories"
};
</script>

<style lang="stylus">
.categories>p {
	text-align: center;
	font-size: 18px;
}

.categories ul {
	margin: 20px auto;
}
</style>
