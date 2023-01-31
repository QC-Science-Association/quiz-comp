<script setup lang="ts">
import ElementSubtable from "./ElementSubtable.vue";
import { iota } from "@/utils";
import { UIState } from "@/js/ui";

const ArrN = (x: number) => Array<number>(x);

const elTable = [
	[1, ...ArrN(16).fill(0), 2],
	[3, 4, ...ArrN(10).fill(0), ...iota(5, 10)],
	[11, 12, ...ArrN(10).fill(0), ...iota(13, 18)],
	iota(19, 36),
	iota(37, 54),
	[55, 56, 57, ...iota(72, 86)],
	[87, 88, 89, ...iota(104, 118)],
];

const hoveringRow = $computed(() => elTable.findIndex(x => x.includes(UIState.hoveringElement.value)) + 1);

const points = [0, 10, 10, 20, 20, 30, 30, 40];
const pointsColour = ["", "#6daec0", "#6daec0", "#53c685", "#53c685", "#cee189", "#cee189", "#ff5200"];
</script>


<template>
	<div class="c-main-table">
		<div class="c-periods">
			<span
				v-for="i in 7"
				:key="'period-' + i"
				class="c-period-text"
			>
				{{ i }}
			</span>
		</div>
		<ElementSubtable :table="elTable" />
		<div class="c-points">
			<span
				v-for="i in 7"
				:key="'points-' + i"
				class="c-points-text"
				:class="{
					'c-points-text--not-current': UIState.hoveringElement.value && hoveringRow !== i,
					'c-points-text-current': hoveringRow === i
				}"
				:style="{
					color: pointsColour[i],
					textShadow: points[i] < 40 ? 'none' : '0 0 7px',
				}"
			>
				{{ points[i] }}
			</span>
		</div>
	</div>
</template>

<style scoped>
.c-main-table {
	display: flex;
}

.c-periods, .c-points {
	display: flex;
	flex-direction: column;
}

.c-periods {
	align-items: flex-end;
}

.c-points {
	align-items: flex-start;
}

.c-points-text, .c-period-text {
	font-size: 40px;
	height: 60px;
	padding: 0 10px;
	display: flex;
	align-items: center;
	transition: opacity 0.2s, filter 0.2s;
}

.c-points-text--current {
	filter: saturate(1.3);
}

.c-points-text--not-current {
	opacity: 0.3;
}
</style>