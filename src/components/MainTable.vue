<script setup lang="ts">
import ElementSubtable from "./ElementSubtable.vue";
import { iota } from "@/utils";

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
</script>


<template>
	<ElementSubtable :table="elTable" />
</template>