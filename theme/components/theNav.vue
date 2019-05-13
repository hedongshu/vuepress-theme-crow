<template>
	<div class="theNav">
		<ul>
			<li
			 v-for="(item, index) in $themeConfig.nav"
			 :key="index"
			>
				<router-link :to='item.link'>
					<icon-font icon-class="geren" />{{ item.text }}
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	data() {
		return {};
	}
};
</script>

<style lang="stylus">
.theNav {
	ul {
		list-style: none;

		li {
			margin: 0 5px;
			float: left;

			a {
				padding: 0 10px;
				background: none;
				border: none;
				border-radius: 2px;
				transition-property: background;
			}

			a:hover {
				background: #e1e1e1;
				border-bottom-color: #222;
			}
		}
	}
}
</style>


