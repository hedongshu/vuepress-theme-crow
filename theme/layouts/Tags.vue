
<template>
	<div class="tags">
		<p>当前共有{{Object.keys($tags._metaMap).length}}个标签</p>
		<ul>
			<li
			 v-for="(value, name) in $tags._metaMap"
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
	name: "Tags"
};
</script>

<style lang="stylus">

.tags p {
	text-align: center;
	font-size: 18px;
}

.tags ul {
	margin: 20px auto;
}
</style>
