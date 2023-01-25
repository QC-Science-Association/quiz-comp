import "@/stylesheets/style.css";
import "@/stylesheets/tooltips.css";
import "@/stylesheets/font.css";

import { createApp, ref } from "vue";

import App from "@/App.vue";

const vueApp = createApp(App);

window.addEventListener("load", () => vueApp.mount("#app"));

export const UIState = {
	hoveringElement: ref<number>(0),
};