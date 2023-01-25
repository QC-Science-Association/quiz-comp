<script setup lang="ts">
import ElementSquare from "./ElementSquare.vue";

const { table } = defineProps<{
	table: number[][]
}>();

const h = table.length;
const w = table.reduce((a, v) => Math.max(a, v.length), 0);
</script>


<template>
	<div
		class="c-element-table"
		:style="{
			gridTemplate: `repeat(${h}, auto) / repeat(${w}, auto)`
		}"
	>
		<template v-for="(row, rowIdx) in table">
			<template v-for="(item, colIdx) in row">
				<ElementSquare
					v-if="item"
					:key="rowIdx * 100 + colIdx"
					:idx="item"
					:style="{
						gridColumn: `${colIdx + 1} / span 1`,
						gridRow: `${rowIdx + 1} / span 1`,
					}"
				/>
			</template>
		</template>
	</div>
</template>

<style scoped>
.c-element-table {
	display: grid;
}
</style>