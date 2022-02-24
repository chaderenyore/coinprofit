import { createRouter, createWebHistory } from "vue-router";

import HomePage from "../views/HomePage.vue";
import Leaders from "../views/LeadersPage.vue";
import About from "../views/AboutPage.vue";
import Help from "../views/HelpPage.vue";

const routes = [
  {
    path: "/",
    component: HomePage,
    // component: () => import('../views/AboutView.vue')
  },
  {
    path: "/leaders",
    component: Leaders,
    // component: () => import('../views/AboutView.vue')
  },
  {
    path: "/about",
    component: About,
    // component: () => import('../views/AboutView.vue')
  },
  {
    path: "/help",
    component: Help,
    // component: () => import('../views/AboutView.vue')
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
