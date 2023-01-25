<script setup lang="ts">
import { ElData, Elements, ElType, ElTypes } from "@/js/elements";
import { UIState } from "@/js/ui";

function isDisabled(elType: ElData) {
	return !elType.about;
}

function isHovering(typeIdx: ElType) {
	return UIState.hoveringElement.value &&
		typeIdx.toString() === Elements[UIState.hoveringElement.value - 1].type.toString();
}
</script>

<template>
	<div class="c-element-types">
		<div
			v-for="(elType, typeIdx) in ElTypes"
			:key="elType.name.replaceAll(' ', '_')"
			class="c-element-type"
			:class="{
				'c-element-type--active': isHovering(typeIdx),
				'c-element-type--not-current': UIState.hoveringElement.value && !isHovering(typeIdx),
			}"
		>
			<div
				class="c-element-type__colour"
				:style="{
					color: elType.colour,
					backgroundColor: elType.colour
				}"
			/>
			<div class="c-element-type__description">
				<span
					class="c-element-type__type"
					:class="{ 'c-element-type__type--disabled': isDisabled(elType) }"
				>
					{{ elType.name }}
				</span>
				<span
					v-if="!isDisabled(elType)"
					class="c-element-type__about"
					:style="{
						textShadow: `0 0 ${elType.colour}`
					}"
				>
					{{ elType.about }}
				</span>
			</div>
		</div>
	</div>
</template>

<style scoped>
.c-element-types {
	position: relative;
	height: 90px;
	left: -100px;
	display: grid;
	gap: 10px;
	grid-template: repeat(5, auto) / repeat(2, 150px);
}

.c-element-type {
	display: flex;
	align-items: center;
	transition: filter 0.2s;
}

.c-element-type--not-current {
	filter: opacity(0.7);
}

.c-element-type--active {
	filter: brightness(1.5);
}

.c-element-type__colour {
	margin-right: 7px;
	width: 30px;
	height: 30px;
	transition: box-shadow 0.2s;
}

.c-element-type--active .c-element-type__colour {
	box-shadow: 0 0 10px 2px;
}

.c-element-type__description {
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
}

.c-element-type__type {
	font-size: 15px;
	line-height: 1.3;
	transition: text-shadow 0.2s;
}

.c-element-type__type--disabled {
	text-decoration: line-through;
}

.c-element-type--active .c-element-type__type {
	text-shadow: 0 0 6px;
}

.c-element-type__about {
	font-size: 12px;
	line-height: 1.3;
	color: rgba(255, 255, 255, 0.5);
}
</style>