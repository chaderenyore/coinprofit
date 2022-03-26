import { createPrismic } from "@prismicio/vue";

const prismic = createPrismic({
  endpoint: "coinprofitapp",
  clientConfig: {
    routes: [
      {
        type: "help_welcome",
        path: "/help",
      },
      {
        type: "articles",
        path: "/help/articles/:uid",
      },
    ],
  },
});

export default prismic;
