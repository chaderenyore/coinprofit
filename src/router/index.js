import { createRouter, createWebHistory } from "vue-router";

import HomePage from "../views/HomePage.vue";

const routes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/leaders",
    component: () => import("../views/LeadersPage.vue"),
  },
  {
    path: "/about",
    component: () => import("../views/AboutPage.vue"),
  },
  {
    path: "/help",
    component: () => import("../views/HelpPage.vue"),
  },
  {
    path: "/affiliate",
    component: () => import("../views/AffiliatePage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
