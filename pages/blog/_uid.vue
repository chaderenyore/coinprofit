<template>
  <div>
    <main class="pt-24 article-main">
      <article
        class="article-container p-0 rounded-3xl w-[90%] md:w-[60%] lg:w-2/4 m-auto"
      >
        <header>
          <PrismicImage
            class="rounded-3xl mb-4 w-[100%]"
            :field="post.data.cover_image"
          />
          <section class="w-[90%] m-auto">
            <p class="article-date font-medium text-[0.9375rem]">
              <time> {{ articleDate }}</time>
            </p>
            <h1 class="text-xl md:text-2xl text-[#3374EA] font-bold">
              {{ $prismic.asText(post.data.article_title) }}
            </h1>
            <section class="mt-5">
              <ul class="flex flex-row gap-2 md:gap-3 justify-around">
                <li
                  v-for="tag in post.tags"
                  :key="tag"
                  @click="searchTag(tag)"
                  class="article-tag self-start text-sm text-[#3374EA] font-medium md:font-semibold rounded-full p-1.5 md:px-3 md:py-2"
                >
                  #{{ tag }}
                </li>
              </ul>
            </section>
            <figure class="flex flex-row gap-3 mt-6 items-center mb-8">
              <PrismicImage
                class="w-16 h-16 block rounded-full border-solid border-4 border-[#ECF5FF]"
                :field="author.avatar"
              />
              <figcaption class="flex flex-col gap-1">
                <h1 class="font-bold text-sm md:text-lg text-[#3374EA]">
                  {{ $prismic.asText(author.name) }}
                </h1>
                <p class="author-bio text-sm md:text-base font-medium">
                  {{ $prismic.asText(author.bio) }}
                </p>
              </figcaption>
            </figure>
          </section>
        </header>
        <main class="w-[90%] m-auto">
          <SliceZone :slices="post.data.body" :components="components" />
        </main>
        <!-- <footer class="w-[90%] m-auto pb-3">
          <section class="article__review rounded-lg p-[1.5rem]">
            <h1 class="text-[#3374EA] text-sm mb-3 w-4/5 m-auto md:w-2/5">
              Share This Post
            </h1>
            <div class="social-button-container w-4/5 m-auto md:w-2/5">
              <twitter-button
                :url="location"
                :description="post.data.preview_text[0].text"
                :isBlank="false"
                btnText=""
              />
              <facebook-button
                :url="location"
                :description="post.data.preview_text[0].text"
                :isBlank="false"
                btnText=""
              />
            </div>
          </section>
        </footer> -->
      </article>
    </main>
  </div>
</template>

<script>
import IntroductionText from "@/components/Slices/IntroductionText.vue";
import TextParagraphs from "@/components/Slices/TextParagraphs.vue";
import ImageCard from "@/components/Slices/ImageCard.vue";
import ImageGallery from "@/components/Slices/ImageGallery.vue";
import VideoPlayer from "@/components/Slices/VideoPlayer.vue";
import MobileImageScreenshotImage from "@/components/Slices/MobileImageScreenshotImage.vue";
// import TwitterButton from "vue-share-buttons/src/components/TwitterButton";
// import FacebookButton from "vue-share-buttons/src/components/FacebookButton";
export default {
  // components: {
  //   TwitterButton,
  //   FacebookButton,
  // },
  data() {
    return {
      error: false,
      errorMessage: null,
      components: {
        introduction: IntroductionText,
        text_paragraphs: TextParagraphs,
        image: ImageCard,
        gallery_of_images: ImageGallery,
        video: VideoPlayer,
        mobile_image___screenshot_image: MobileImageScreenshotImage,
      },
      articleDate: null,
      author: null,
      articleTitle: null,
    };
  },

  async asyncData({ $prismic, params, error }) {
    const post = await $prismic.api.getByUID("blog", params.uid, {
      fetchLinks: ["author.name", "author.avatar", "author.bio"],
    });

    if (post) {
      console.log(post);
      const author = post.data.author.data;
      const date = new Date(post.first_publication_date);
      const articleDate = date.toLocaleString([], {
        day: "numeric",
        month: "short",
        year: "numeric",
      });

      return { post, author, articleDate };
    } else {
      error({ statusCode: 404, message: "Page not found" });
    }
  },

  computed: {
    location() {
      return document.location.href;
    },
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
  head() {
    return {
      title: this.post.data.article_title[0].text + " - Coinprofit Blog",
      meta: [
        {
          hid: "desc",
          name: "description",
          content: this.post.data.preview_text[0].text,
        },
        {
          hid: "keywords",
          name: "keywords",
          content:
            "bitcoin,crypto tracking, track crypto assets, coinprofit blog, eth, tracking, portfolio tracking",
        },
        {
          property: "og:title",
          content: this.post.data.article_title[0].text + " - Coinprofit Blog",
        },
        {
          property: "og:description",
          content: this.post.data.preview_text[0].text,
        },
        {
          property: "og:type",
          content: "article",
        },
        {
          property: "og:url",
          content: "coinprofit.app/blog/" + this.post.slugs[0],
        },
        {
          property: "og:image",
          content: this.post.data.cover_image.url,
        },
        {
          name: "twitter:card",
          content: "summary",
        },
        {
          name: "twitter:title",
          content: this.post.data.article_title[0].text + " - Coinprofit Blog",
        },
        {
          name: "twitter:site",
          content: "@coinprofit_app",
        },
        {
          name: "twitter:description",
          content: this.post.data.preview_text[0].text,
        },
        {
          name: "twitter:image",
          content: this.post.data.cover_image.url,
        },
      ],
    };
  },
};
</script>

<style scoped>
@media (min-width: 27.5rem) {
  .article-main {
    padding-top: 8rem;
  }
}
@media (min-width: 820px) {
  .article-main {
    padding-top: 6.5rem;
  }
}
.article-container {
  background: var(--article-container);
  box-shadow: 0 20px 17px #1c192305;
}
.article-date {
  color: var(--article-date);
}
.article-tag {
  cursor: pointer;
  background: var(--article-tag);
}
.author-bio {
  color: var(--author-bio);
}

.article__review {
  background: var(--social-button-container);
}

social-button-container {
  display: flex;
  justify-content: space-around;
}
</style>
