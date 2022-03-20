<template>
  <div v-if="helpost">
    <ul class="md:grid gap-4 grid-cols-3 grid-rows-3">
      <li v-for="post in helpost.results" :key="post.uid">
        <article
          class="help__card--article p-6 rounded-3xl max-w-[360px] max-h-[650px]"
        >
          <PrismicImage
            :field="post.data.cover_image"
            class="w-[100%] rounded-3xl mb-3"
          />
          <section>
            <PrismicRichText
              :field="post.data.article_title"
              class="text-[#3374EA] text-2xl font-bold mb-4"
              wrapper="h1"
            />
            <p class="card-article__text font-medium text-lg leading-8">
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
  </div>
</template>

<script>
// import { useAllPrismicDocumentsByType } from "@prismicio/vue";
// const { data: helpost } = useAllPrismicDocumentsByType("articles");
export default {
  data() {
    return {
      helpost: "",
    };
  },
  methods: {
    async getData() {
      this.helpost = await this.$prismic.client.getByType("articles");
      console.log(this.helpost);
    },
  },
  mounted() {
    this.getData();
  },
};
</script>

<style scoped>
.help__card--article {
  background-color: var(--third-color);
  box-shadow: 0 20px 17px #1c192305;
}

.card-article__text {
  color: var(--help-article-text);
}
</style>
