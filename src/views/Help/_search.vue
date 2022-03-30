<template>
  <section
    class="search__tag--section w-[85%] md:w-[80%] m-auto"
    v-if="tagArticleResult"
  >
    <ArticleCard
      :queryobj="tagArticleResult"
      @search-tag="searchFromComponent"
    />
  </section>
  <section
    class="search__query--section w-[85%] md:w-[80%] m-auto"
    v-if="queryResult"
  ></section>
</template>

<script>
  export default {
    data() {
      return {
        tagArticleResult: "",
        tagTutorialResult: "",
        queryResult: "",
      };
    },

    methods: {
      async searchByQuery(query) {
        const fullTextResult = await this.$prismic.client.get({
          predicates: this.$prismic.predicate.not(
            "articles.article_title",
            query
          ),
        });
        console.log(fullTextResult);
      },

      async searchByTag(tag) {
        const tagResult = await this.$prismic.client.getByTag(tag);
        const result = tagResult.results;

        this.tagArticleResult = result.filter(function (article) {
          return article.type == "articles";
        });

        this.tagTutorialResult = result.filter(function (article) {
          return article.type == "tutorial";
        });
      },

      searchFromComponent(tag) {
        this.searchByTag(tag);
        this.$router.push({
          name: "help-search",
          query: {
            tag: tag,
          },
        });
      },
    },

    created() {
      if ("q" in this.$route.query) {
        const query = this.$route.query.q;
        this.searchByQuery(query);
      } else if ("tag" in this.$route.query) {
        const tag = this.$route.query.tag;
        this.searchByTag(tag);
      }
    },
  };
</script>

<style scoped>
  @media (min-width: 1400px) {
    .search__tag--section {
      max-width: 1350px;
    }
  }
  .search__tag--section {
    padding-top: 7rem;
  }

  @media screen and (min-width: 520px) {
    .search__tag--section {
      padding-top: 8rem;
    }
  }

  @media screen and (min-width: 768px) {
    .search__tag--section {
      padding-top: 9rem;
    }
  }
</style>
