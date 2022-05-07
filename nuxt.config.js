export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title:
      "Coinprofit - Subscribe to your favourite crypto influencers/leaders",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Subscribe to your favourite crypto influencers/leaders. See the coins they buy, when they buy and when they sell",
      },
      { name: "format-detection", content: "telephone=no" },
      {
        name: "apple-mobile-web-app-capable",
        content: "yes",
      },
      {
        name: "apple-mobile-web-app-status-bar-style",
        content: "black",
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        property: "og:image",
        content: "https://i.ibb.co/HqwC6df/Coin-Profit-Logo-white.png",
      },
      {
        property: "og:image:width",
        content: "1200",
      },
      {
        property: "og:image:height",
        content: "630",
      },
    ],
    script: [
      {
        src: "https://kit.fontawesome.com/d7d752671e.js",
        crossorigin: "anonymous",
      },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.png" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossorigin: "anonymous",
      },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
        crossorigin: "anonymous",
      },
      {
        rel: "preconnect",
        href: "https://ka-f.fontawesome.com",
        crossorigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",
      },
    ],
  },

  loading: {
    color: "blue",
    continuous: true,
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~assets/styles/main.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "~/plugins/emitter.js",
    { src: "~/plugins/vue-plyr", mode: "client" },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["nuxt-windicss", "@nuxt/image", "@nuxtjs/prismic"],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["vue-social-sharing/nuxt"],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  prismic: {
    endpoint: "https://coinprofitapp.prismic.io/api/v2",
    apiOptions: {
      routes: [
        {
          type: "help_welcome",
          path: "/help",
        },
        {
          type: "articles",
          path: "/help/articles/:uid",
        },
        {
          type: "blog",
          path: "/blog/:uid",
        },
        {
          type: "tutorial",
          path: "/help/tutorials/:uid",
        },
        {
          type: "academy",
          path: "/academy/articles/:uid",
        },
      ],
    },
  },

  pageTransition: {
    name: "fade",
    mode: "out-in",
  },
};
