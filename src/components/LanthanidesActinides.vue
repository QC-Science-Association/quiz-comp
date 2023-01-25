<script setup lang="ts">
import ElementSubtable from "./ElementSubtable.vue";
import { iota } from "@/utils";

const elTable = [
	iota(58, 71),
	iota(90, 103)
];
</script>


<template>
	<ElementSubtable :table="elTable" />
</template>