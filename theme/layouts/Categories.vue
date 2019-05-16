<template>
	<div>
		<h2>分类 / categories</h2>
		<p v-if="Object.keys($categories._metaMap).length == 0">
			暂时没有标签
		</p>
		<div
		 v-for="(value, name) in $categories._metaMap"
		 :key="name"
		>
			<theItem
			 :ivalue='value'
			 :ikey="name"
			/>
		</div>

	</div>
</template>

<script>
export default {
	name: "Categories"
};
</script>
