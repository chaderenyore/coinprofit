import { createRouter, createWebHistory } from "vue-router";
import NProgress from "nprogress";
import HomePage from "../views/HomePage.vue";
import BlogPost from "../views/Help/_uid.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
    meta: {
      auth: true,
      title: "Coinprofit - Home",
    },
  },
  {
    path: "/leaders",
    name: "leaders",
    component: () => import("../views/LeadersPage.vue"),
    meta: {
      auth: true,
      title: "Coinprofit - Leaders",
    },
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/AboutPage.vue"),
    meta: {
      auth: true,
      title: "Coinprofit - About",
    },
  },
  {
    path: "/blog",
    name: "blog",
    component: () => import("../views/BlogPage.vue"),
    meta: {
      auth: true,
      title: "Coinprofit - Blog",
    },
  },
  {
    path: "/help",
    name: "help",
    component: () => import("../views/HelpPage.vue"),
    meta: {
      auth: true,
      title: "Coinprofit - Help",
    },
  },
  {
    path: "/help/articles/:uid",
    component: BlogPost,
    name: "SingleHelpPost",
    meta: {
      auth: true,
      title: "Coinprofit - Blog Post",
    },
  },
  {
    path: "/help/search",
    name: "help-search",
    component: () => import("../views/Help/_search.vue"),
    meta: {
      auth: true,
      title: "Coinprofit - Help",
    },
  },
  {
    path: "/:notfound(.*)",
    redirect: "/",
  },
  {
    path: "/calculator",
    name: "calculator",
    component: () => import("../views/CalculatorPage.vue"),
    meta: {
      auth: true,
      title: "Coinprofit - Calculator",
    },
  },

  {
    path: "/aml_policy",
    name: "amlpolicies",
    component: () => import("../views//Legal/AmlPolicies.vue"),
    meta: {
      auth: true,
      title: "Coinprofit - Aml-Policy",
    },
  },

  {
    path: "/privacy_policy",
    name: "privacypolicy",
    component: () => import("../views//Legal/PrivacyPolicyPage.vue"),
    meta: {
      auth: true,
      title: "Coinprofit - Privacy policy",
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(_, _2, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return {
      left: 0,
      top: 0,
    };
  },
});

router.beforeResolve((to, _, next) => {
  // If this isn't an initial page load.
  if (to.name) {
    // Start the route progress bar.
    NProgress.start();
  }
  next();
});

router.afterEach(() => {
  // Complete the animation of the route progress bar.
  NProgress.done();
});

export default router;
