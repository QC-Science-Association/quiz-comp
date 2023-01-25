<script setup lang="ts">
import LanthanidesActinides from "@/components/LanthanidesActinides.vue";
import Legend from "@/components/Legend.vue";
import MainTable from "@/components/MainTable.vue";
</script>

<template>
	<div class="c-container">
		<br>
		<Legend />
		<MainTable />
		<br>
		<br>
		<LanthanidesActinides />
	</div>
</template>

<style scoped>
.c-container {
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	overflow: hidden;
	position: relative;
}
</style>