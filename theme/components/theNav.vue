<template>
	<div class="theNav">
		<ul>
			<li
			 v-for="(item, index) in $themeConfig.nav"
			 :key="index"
			>
				<router-link :to='item.link'>
					<icon-font :icon-class="item.icon" />{{ item.text }}
				</router-link>
			</li>

			<SearchBox />
		</ul>
	</div>
</template>

<script>
import SearchBox from "@SearchBox";

export default {
	data() {
		return {};
	},
	components: {
		SearchBox
	}
};
</script>

<style lang="stylus">
.theNav {
	ul {
		list-style: none;

		li {
			margin-left: 5px;
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


