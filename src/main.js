import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import prismic from "./prismic/prismic.js";
import "./tailwind/index.css";
// import VuePlyr from "vue-plyr";
const app = createApp(App);
import BaseCallToAction from "@/components/BaseCallToAction.vue";
import ArticleCard from "@/components/Help/ArticleCard.vue";

app.component("BaseCallToAction", BaseCallToAction);
app.component("ArticleCard", ArticleCard);

app.use(router).use(prismic).mount("#app");
