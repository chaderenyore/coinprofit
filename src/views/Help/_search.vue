<template>
  <div class="pt-20"></div>
  <section
    class="search__tag--section w-[85%] md:w-[80%] m-auto"
    v-if="tagSearch"
  >
    <TutorialCard
      :tutsObj="tagTutorialResult"
      class="mb-24"
      v-if="tagTutorialResult"
    />
    <ArticleCard
      :queryobj="tagArticleResult"
      v-if="tagArticleResult"
      @search-tag="searchFromComponent"
    />
  </section>
  <section
    class="search__query--section w-[85%] md:w-[80%] m-auto"
    v-if="querySearch"
  >
    <TutorialCard :tutsObj="tutorialSearchResult" v-if="tutorialSearchResult" />
    <ArticleCard
      v-if="articleSearchResult"
      :queryobj="articleSearchResult"
      @search-tag="searchFromComponent"
    />
  </section>
</template>

<script>
  import TutorialCard from "@/components/Help/TutorialCard.vue";
  export default {
    components: { TutorialCard },
    data() {
      return {
        tagSearch: null,
        querySearch: null,
        tagArticleResult: "",
        tagTutorialResult: "",
        articleSearchResult: "",
        tutorialSearchResult: "",
      };
    },

    methods: {
      async searchArticles(query) {
        const fullTextResult = await this.$prismic.client.get({
          predicates: this.$prismic.predicate.fulltext(
            "my.articles.article_title",
            query
          ),
        });
        return fullTextResult;
      },

      async searchTutorials(query) {
        const videoFullTextResult = await this.$prismic.client.get({
          predicates: this.$prismic.predicate.fulltext(
            "my.tutorial.name",
            query
          ),
        });
        return videoFullTextResult;
      },

      async callMultipleSearch(query) {
        const searchArticleValue = await this.searchArticles(query);
        const searchVideoValue = await this.searchTutorials(query);
        this.articleSearchResult = searchArticleValue.results;
        this.tutorialSearchResult = searchVideoValue.results;
      },

      async searchByTag(tag) {
        const tagResult = await this.$prismic.client.getByTag(tag);
        const result = tagResult.results;

        this.tagArticleResult = result.filter(function (article) {
          return article.type != "tutorial";
        });

        this.tagTutorialResult = result.filter(function (article) {
          return article.type == "tutorial";
        });

        this.tagSearch = true;
        this.querySearch = false;
      },

      searchFromComponent(tag) {
        this.searchByTag(tag);
        this.$router.replace({
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
        this.callMultipleSearch(query);
        this.querySearch = true;
        this.tagSearch = false;
      } else if ("tag" in this.$route.query) {
        const tag = this.$route.query.tag;
        this.searchByTag(tag);
        this.tagSearch = true;
        this.querySearch = false;
      }
    },
  };
</script>

<style scoped>
  @media (min-width: 1400px) {
    .search__tag--section,
    .search__query--section {
      max-width: 1350px;
    }
  }
  .search__tag--section,
  .search__query--section {
    padding-top: 3.5rem;
  }

  @media screen and (min-width: 520px) {
    .search__tag--section,
    .search__query--section {
      padding-top: 5rem;
    }
  }

  @media screen and (min-width: 768px) {
    .search__tag--section,
    .search__query--section {
      padding-top: 5rem;
    }
  }
</style>
