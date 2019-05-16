
<template>
	<div>
		<h2>标签 / Tags</h2>
		<p v-if="Object.keys($tags._metaMap).length == 0">
			暂时没有标签
		</p>
		<div
		 v-for="(value, name) in $tags._metaMap"
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
	name: "Tags"
};
</script>
