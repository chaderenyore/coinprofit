<template>
  <main class="w-[85%] md:w-[80%] m-auto pt-32">
    <h1
      class="text-xl md:text-2xl text-[#3374EA] font-bold text-center mb-[6rem]"
    >
      Blog
    </h1>

    <article-card
      :queryobj="blogpost.results"
      @searchTag="searchTag"
    ></article-card>
  </main>
</template>

<script>
export default {
  async asyncData({ $prismic }) {
    const blogpost = await $prismic.api.query(
      $prismic.predicate.at("document.type", "blog")
    );
    console.log(blogpost);

    return { blogpost };
  },

  methods: {
    searchTag(tag) {
      this.$router.push({
        name: "help",
        query: {
          tag: tag,
        },
      });
    },
  },

  head: {
    title: "CoinProfit Official Blog",
    meta: [
      {
        name: "description",
        content: "The CoinProfit official Blog",
        hid: "desc",
      },
      {
        name: "keywords",
        content:
          "bitcoin,crypto tracking, track crypto assets, coinprofit blog, eth, tracking, portfolio tracking",
        hid: "keywords",
      },
      {
        name: "apple-mobile-web-app-title",
        content: "Coin Profit official Blog",
      },
      {
        property: "og:description",
        content: "Coin Profit official Blog",
      },
      {
        property: "og:title",
        content: "Coin Profit official Blog",
      },
    ],
  },
};
</script>
