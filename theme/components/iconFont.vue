<template>
	<svg
	 class="icon"
	 aria-hidden="true"
	>
		<use :xlink:href="iconName"></use>
	</svg>
</template>

<script>
//at.alicdn.com/t/font_1182506_hcxpva4ory.js
export default {
	props: {
		iconClass: {
			type: String,
			required: true
		}
	},
	computed: {
		iconName() {
			return `#icon-${this.iconClass}`;
		}
	}
};
</script>

<style>
.icon {
	width: 1em;
	height: 1em;
	vertical-align: -0.15em;
	fill: currentColor;
	overflow: hidden;
}
</style>

