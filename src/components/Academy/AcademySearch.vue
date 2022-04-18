<template>
  <section class="search__tag--section" v-if="tagSearch">
    <h1 class="text-[#3374ea] mb-7 text-center">
      Search Result for tag "{{ this.$route.query.tag }}"
    </h1>
    <section v-if="loading" class="text-3xl font-extrabold">
      <div class="spinner">
        <svg>
          <use href="@/assets/images/icons.svg#icon-loader"></use>
        </svg>
      </div>
    </section>
    <TutorialCard
      :tutsObj="tagTutorialResult"
      class="mb-16"
      v-if="tagTutorialResult"
    />
    <ArticleCard
      :queryobj="tagArticleResult"
      v-if="tagArticleResult"
      @search-tag="searchFromComponent"
    />
  </section>
  <section class="search__query--section" v-if="querySearch">
    <h1 class="text-[#3374ea] text-center">
      Search Result for search term "{{ this.$route.query.q }}"
    </h1>
    <section v-if="loading" class="text-3xl pt-20 font-extrabold">
      <div class="spinner">
        <svg>
          <use href="@/assets/images/icons.svg#icon-loader"></use>
        </svg>
      </div>
    </section>
    <ArticleCard
      v-if="articleSearchResult"
      :queryobj="articleSearchResult"
      @search-tag="searchFromComponent"
      class="mt-16"
    />
  </section>
  <section v-if="error">
    <not-found>
      Your Search did not return anything adjust your queries and try again
    </not-found>
  </section>
</template>

<script>
  import TutorialCard from "@/components/Help/TutorialCard.vue";
  export default {
    components: { TutorialCard },
    inheritAttrs: false,
    data() {
      return {
        tagSearch: null,
        querySearch: null,
        tagArticleResult: "",
        tagTutorialResult: "",
        articleSearchResult: "",
        tag: "",
        query: "",
        loading: true,
        error: false,
      };
    },

    methods: {
      async searchArticles(query) {
        const fullTextResult = await this.$prismic.client.get({
          predicates: this.$prismic.predicate.fulltext(
            "my.academy.article_title",
            query
          ),
        });
        this.query = query;
        return fullTextResult;
      },

      async callMultipleSearch(query) {
        const searchArticleValue = await this.searchArticles(query);
        this.articleSearchResult = searchArticleValue.results;
        if (this.articleSearchResult == "") {
          this.error = true;
          this.loading = false;
        } else {
          this.loading = false;
          this.error = false;
        }
      },

      async searchByTag(tag) {
        const tagResult = await this.$prismic.client.getByTag(tag);
        const result = tagResult.results;

        this.tagArticleResult = result.filter(function (article) {
          return article.type === "academy";
        });

        this.tagTutorialResult = result.filter(function (article) {
          return article.type == "tutorial";
        });
        this.tag = tag;
        this.tagSearch = true;
        this.querySearch = false;
        if (this.tagArticleResult == "" && this.tagTutorialResult == "") {
          this.error = true;
          this.loading = false;
        } else {
          this.loading = false;
          this.error = false;
        }
      },

      searchFromComponent(tag) {
        this.searchByTag(tag);
        this.$router.push({
          name: "academy",
          query: {
            tag: tag,
          },
        });
      },
    },

    created() {
      this.emitter.on("search-fulltext", (value) => {
        this.callMultipleSearch(value);
        this.querySearch = true;
        this.tagSearch = false;
      });
      this.emitter.on("search-tags", (tag) => {
        this.searchByTag(tag);
        this.tagSearch = true;
        this.querySearch = false;
      });
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
    padding-top: 2rem;
  }

  .spinner {
    margin: 5rem auto;
    text-align: center;
  }

  .spinner svg {
    height: 6rem;
    width: 6rem;
    fill: #3374ea;
    animation: rotate 2s infinite linear;
  }

  @keyframes rotate {
    0% {
      transform: rotate(0);
    }

    100% {
      transform: rotate(360deg);
    }
  }
</style>
