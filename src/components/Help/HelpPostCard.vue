<template>
  <section v-if="data" class="mb-24">
    <h1
      class="text-center font-extrabold text-2xl md:text-3xl mb-3 text-[#3374ea]"
    >
      {{ $prismic.asText(data.data.welcome_heading) }}
    </h1>
    <p
      class="help__article text-center text-[1.2rem] font-medium max-w-[636px] m-auto"
    >
      {{ $prismic.asText(data.data.welcome_text) }}
    </p>
  </section>
  <div v-if="helpost">
    <ul
      class="flex justify-center flex-wrap gap-y-20 md:gap-y-16 gap-x-6 md:grid md:justify-center md:items-start md:content-center md:grid-cols-2 lg:flex lg:flex-wrap lg:justify-start xl:grid xl:grid-cols-3 xl:gap-x-5"
    >
      <li
        v-for="post in helpost.results"
        :key="post.uid"
        class="help__card--list"
      >
        <img
          src="@/assets/images/article-blob.png"
          class="article-blob"
          alt=""
        />
        <article
          class="help__card--article p-6 rounded-3xl w[80%] max-w-[360px] max-h-[650px]"
        >
          <prismic-link :field="post">
            <PrismicImage
              :field="post.data.cover_image"
              class="w-[100%] h-[100%] rounded-3xl mb-3"
            />
          </prismic-link>
          <section>
            <section class="mb-3">
              <ul class="flex flex-row gap-2 justify-evenly">
                <div v-for="(e, i) in 3" :key="i">
                  <li
                    v-if="post.tags[i]"
                    class="article-tag font-medium text-sm self-start text-[#3374EA] rounded-full p-1.5 md:p-2"
                    @click="searchTag(post.tags[i])"
                  >
                    {{ "#" + post.tags[i] }}
                  </li>
                </div>
              </ul>
            </section>
            <prismic-link :field="post">
              <h1 class="text-[#3374EA] text-lg md:text-2xl font-bold mb-4">
                {{ $prismic.asText(post.data.article_title) }}
              </h1>
            </prismic-link>
            <p class="card-article__text font-medium text-lg leading-8 mb-3">
              {{ $prismic.asText(post.data.preview_text) }}{{ "..." }}
            </p>
            <prismic-link :field="post">
              <p class="text-[#3374EA] text-lg font-semibold mt-2">
                Read More
                <span class="inline-block align-middle ml-1"
                  ><img
                    src="@/assets/images/arrow-pointing-to-right.svg"
                    alt="pointer"
                    class="w-[20px] h-[14px]"
                /></span>
              </p>
            </prismic-link>
          </section>
        </article>
      </li>
    </ul>
    <div class="pagination text-center mt-14">
      <button class="pagination-button" @click="loadMore" v-if="showLoadMore">
        <p class="text-[#3374ea] text-base font-semibold">Load More</p>
      </button>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        data: null,
        helpost: "",
        pageSize: 6,
        showLoadMore: true,
      };
    },
    methods: {
      async getPageDatafromPrismic() {
        this.data = await this.$prismic.client.getSingle("help_welcome");
      },

      async getData() {
        this.helpost = await this.$prismic.client.getByType("articles", {
          pageSize: this.pageSize,
        });
      },

      searchTag(tag) {
        this.$router.push({
          name: "help-search",
          query: {
            tag: tag,
          },
        });
      },

      loadMore() {
        this.pageSize *= 2;
        this.getData();
      },
    },

    watch: {
      "helpost.next_page"(newValue) {
        if (!newValue) {
          this.showLoadMore = !this.showLoadMore;
        }
      },
    },

    mounted() {
      this.getPageDatafromPrismic();
      this.getData();
    },
  };
</script>

<style scoped>
  .help__card--article {
    background-color: var(--third-color);
    box-shadow: 0 20px 17px #1c192305;
    position: relative;
  }

  .help__article {
    color: var(--help-article-text);
  }

  .card-article__text {
    color: var(--help-article-text);
  }

  .article-tag {
    cursor: pointer;
    background: var(--article-tag);
  }

  .help__card--list {
    position: relative;
  }

  .article-blob {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  @media (min-width: 2560px) {
    .article-blob {
      left: 43%;
    }
  }

  .pagination-button {
    cursor: pointer;
    border: none;
    padding: 0.8rem 2rem;
    margin: 0;
    text-decoration: none;
    background: #ffffff 0% 0% no-repeat padding-box;
    box-shadow: 0px 1.25rem 1.0625rem #1c192305;
    border-radius: 1.875rem;
    transition: all 0.2s;
  }

  .pagination-button:hover {
    box-shadow: 0px 1rem 1.0625rem #1c192305;
  }

  .pagination-button:active {
    box-shadow: none;
  }
</style>
