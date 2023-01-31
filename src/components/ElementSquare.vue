<script setup lang="ts">
import { toRaw } from "vue";

import { Elements, ElTypes, selectedElements } from "@/js/elements";
import { UIState } from "@/js/ui";

const { idx } = defineProps<{
	idx: number,
}>();

const el = Elements[idx - 1];

const isDisabled = $computed(() => !ElTypes[el.type].about);
const isUsed = $computed(() => selectedElements[idx - 1]);

function toggleUsed() {
	if (isUsed) {
		selectedElements[idx - 1] = 0;
		UIState.hoveringElement.value = idx;
	} else {
		selectedElements[idx - 1] = 1;
		UIState.hoveringElement.value = 0;
	}
	localStorage.setItem("scisoquizcomp", JSON.stringify(toRaw(selectedElements)));
}
</script>

<template>
	<div
		class="c-element-square"
		:class="{
			'c-element-square--disabled': isDisabled,
			'c-element-square--used': isUsed,
			'c-element-square--not-current': UIState.hoveringElement.value && UIState.hoveringElement.value !== idx
		}"
		:style="{
			'--el-color': ElTypes[el.type].colour,
		}"
		@mouseenter="if (!isDisabled && !isUsed) UIState.hoveringElement.value = idx;"
		@mouseleave="UIState.hoveringElement.value = 0;"
		@click="toggleUsed();"
	>
		<span class="c-element-square__atomic-mass">{{ idx }}</span>
		<span class="c-element-square__relative-mass">
			{{ el.relativeMass % 1 ? el.relativeMass.toFixed(2) : `(${el.relativeMass})` }}
		</span>
		<span class="c-element-square__symbol">{{ el.symbol }}</span>
		<span class="c-element-square__name">{{ el.name }}</span>
	</div>
</template>

<style scoped>
.c-element-square {
	width: 60px;
	height: 60px;
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	color: rgba(255, 255, 255, 0.8);
	background-color: var(--el-color);
	cursor: pointer;

	filter: none;
	border: 1px solid transparent;

	transition: filter 0.2s, border 0.2s, color 0.2s, opacity 0.2s;
}

.c-element-square--not-current {
	opacity: 0.7;
}

.c-element-square:not(.c-element-square--disabled):not(.c-element-square--used):hover {
	color: white;
	filter: saturate(2);
	border-color: white;
}

.c-element-square--used {
	background-color: black;
	filter: brightness(0.5);
	text-decoration: line-through;
}

.c-element-square--used:hover {
	text-decoration: none;
}

.c-element-square--disabled {
	color: rgba(255, 255, 255, 0.6);
	text-decoration: line-through;
	cursor: not-allowed;
}

.c-element-square__atomic-mass {
	text-decoration: inherit;
	position: absolute;
	top: 3px;
	left: 3px;
	font-size: 10px;
}

.c-element-square__relative-mass {
	text-decoration: inherit;
	position: absolute;
	top: 3px;
	right: 3px;
	font-size: 10px;
}

.c-element-square__symbol {
	text-decoration: inherit;
	font-size: 25px;
	font-weight: bold;
}

.c-element-square__name {
	text-decoration: inherit;
	position: absolute;
	bottom: 3px;
	font-size: 10px;
}
</style>