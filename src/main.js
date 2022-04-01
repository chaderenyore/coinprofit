import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import prismic from "./prismic/prismic.js";
import "./tailwind/index.css";
import VuePlyr from "vue-plyr";
import "vue-plyr/dist/vue-plyr.css";
const app = createApp(App);
import BaseCallToAction from "@/components/BaseCallToAction.vue";
import ArticleCard from "@/components/Help/ArticleCard.vue";

app.component("BaseCallToAction", BaseCallToAction);
app.component("ArticleCard", ArticleCard);

<<<<<<< HEAD
app.use(router).use(prismic).use(VuePlyr).mount("#app");
=======
app.use(router).use(prismic).mount("#app");



const lazyLoadImg = document.querySelectorAll("[data-src]");

function preloadImage(images) {
    const src = images.getAttribute("data-src");
    if(!src) {
        return;
    }

    images.src = src;
}

const imgOptions = {
    threshold: 0.9,
    rootMargin: "0px 0px -20px 0px"
};


const lazyloadingObeserver = new IntersectionObserver((entires, lazyloadingObeserver) => {
    entires.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            preloadImage(entry.target);
            lazyloadingObeserver.unobserve(entry.target);
        }
       

    })

}, imgOptions);

lazyLoadImg.forEach(img => {
    lazyloadingObeserver.observe(img);
});




>>>>>>> iroro
