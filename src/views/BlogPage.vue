<template>
  <main class="w-[85%] md:w-[80%] m-auto">
    <h1
      class="text-xl md:text-2xl text-[#3374EA] font-bold text-center mb-[6rem]"
    >
      Blog
    </h1>
    <section v-if="loading" class="text-3xl pt-12 md:pt-20 font-extrabold">
      <div class="spinner">
        <svg>
          <use href="@/assets/images/icons.svg#icon-loader"></use>
        </svg>
      </div>
    </section>
    <div v-if="blogpost">
      <article-card
        :queryobj="blogpost.results"
        @search-tag="this.searchTag"
      ></article-card>
    </div>
  </main>
</template>

<script>
  export default {
    data() {
      return {
        title: "CoinProfit Blog",
        blogpost: "",
        loading: true,
      };
    },
    methods: {
      async getData() {
        this.blogpost = await this.$prismic.client.getByType("blog");
      },
      searchTag(tag) {
        this.$router.push({
          name: "help",
          query: {
            tag: tag,
          },
        });
      },
    },

    mounted() {
      this.getData();
    },

    beforeUpdate() {
      this.loading = false;
    },
    // Usage with context the component
    head: {
      // To use "this" in the component, it is necessary to return the object through a function
      title: function () {
        return {
          inner: this.title,
        };
      },
      meta: [{ name: "description", content: "My description", id: "desc" }],
    },
  };
</script>

<style scoped>
  main {
    padding-top: 8rem;
  }

  .spinner {
    margin: 5rem auto;
    text-align: center;
  }

  .spinner svg {
    height: 3rem;
    width: 3rem;
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

  .share-button {
    border-radius: 1200px !important;
  }
</style>
