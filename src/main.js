import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import prismic from "./prismic/prismic.js";
import "./tailwind/index.css";
import VuePlyr from "vue-plyr";
import "vue-plyr/dist/vue-plyr.css";
const app = createApp(App);
import BaseCallToAction from "@/components/BaseCallToAction.vue";

app.component("BaseCallToAction", BaseCallToAction);

app.use(router).use(prismic).use(VuePlyr).mount("#app");
