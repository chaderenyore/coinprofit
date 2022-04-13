<template>
  <ul
    class="flex justify-center flex-wrap gap-y-20 md:gap-y-16 gap-x-6 md:grid md:justify-center md:items-start md:content-center md:grid-cols-2 lg:flex lg:flex-wrap lg:justify-start xl:grid xl:grid-cols-3 xl:gap-x-5"
  >
    <li v-for="post in queryobj" :key="post.uid" class="help__card--list">
      <img src="@/assets/images/article-blob.png" class="article-blob" alt="" />
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
                  @click="$emit('searchTag', post.tags[i])"
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
              /></span>
            </p>
          </prismic-link>
        </section>
      </article>
    </li>
  </ul>
</template>

<script>
  export default {
    props: {
      queryobj: {
        type: Object,
        required: true,
      },
    },
    emits: ["searchTag"],

    methods: {
      // filterByArticleAndTutorial() {
      //   for (const data in this.query.results.data) {
      //   }
      // }
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
</style>
