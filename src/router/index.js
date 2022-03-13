import { createRouter, createWebHistory } from "vue-router";

import HomePage from "../views/HomePage.vue";
import BlogPost from "../views/Help/_uid.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/leaders",
    name: "leaders",
    component: () => import("../views/LeadersPage.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/AboutPage.vue"),
  },
  {
    path: "/help",
    name: "help",
    component: () => import("../views/HelpPage.vue"),
  },
  {
    path: "/help/:uid",
    component: BlogPost,
    name: "SingleHelpPost",
  },
  {
    path: "/affiliate",
    name: "affiliate",
    component: () => import("../views/AffiliatePage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
