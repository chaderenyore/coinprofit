import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import BlogPost from "../views/Help/_uid.vue";
import NProgress from "nprogress";

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
    path: "/blog",
    name: "blog",
    component: () => import("../views/BlogPage.vue"),
  },
  {
    path: "/blog/:uid",
    name: "SingleBlogPost",
    component: () => import("../views/Blog/_uid.vue"),
  },
  {
    path: "/help",
    name: "help",
    component: () => import("../views/HelpPage.vue"),
    meta: {
      disableScroll: true,
    },
  },
  {
    path: "/help/articles/:uid",
    component: BlogPost,
    name: "SingleHelpPost",
  },
  {
    path: "/help/tutorials",
    redirect: "/help",
  },
  {
    path: "/help/articles",
    redirect: "/help",
  },
  {
    path: "/help/tutorials/:uid",
    component: () => import("../views/Tutorial/_uid.vue"),
    name: "TutorialVideo",
  },
  {
    path: "/academy",
    name: "academy",
    component: () => import("../views/AcademyPage.vue"),
    meta: {
      disableScroll: true,
    },
  },
  {
    path: "/academy/articles/:uid",
    component: () => import("../views/Academy/_uid.vue"),
    name: "SingleAcademyPost",
  },
  {
    path: "/calculator",
    name: "calculator",
    component: () => import("../views/CalculatorPage.vue"),
  },

  {
    path: "/aml_policy",
    name: "amlpolicies",
    component: () => import("../views//Legal/AmlPolicies.vue"),
  },

  {
    path: "/privacy_policy",
    name: "privacypolicy",
    component: () => import("../views//Legal/PrivacyPolicyPage.vue"),
  },
  {
    path: "/:notfound(.*)",
    redirect: "/",
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, _, savedPosition) {
    if (to.matched.some((m) => m.meta.disableScroll)) return;

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
