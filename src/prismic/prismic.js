import { createPrismic } from "@prismicio/vue";

const prismic = createPrismic({
  endpoint: "nyore",
  clientConfig: {
    routes: [
      {
        type: "help_welcome",
        path: "/help",
      },
      {
        type: "help_post",
        path: "/help/:uid",
      },
    ],
  },
});

export default prismic;
