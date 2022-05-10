<template>
  <section v-if="loading" class="text-3xl pt-20 font-extrabold">
    <div class="spinner">
      <svg>
        <use href="@/assets/images/icons.svg#icon-loader"></use>
      </svg>
    </div>
  </section>
  <main v-if="post" class="pt-24 article-main">
    <teleport to="head">
      <template>
        <meta property="og:image" :content="post.data.cover_image.url" />
        <meta name="description" :content="post.data.preview_text" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta
          name="apple-mobile-web-app-title"
          :content="post.data.article_title"
        />
        <meta name="og:description" :content="post.data.article_title" />
        <meta property="og:title" :content="post.data.article_title" />
        <meta
          name="keywords"
          content="bitcoin, btc education, crypto tracking, track crypto assets, tracking, coinprofit blog"
        />
      </template>
    </teleport>
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
      <footer class="w-[90%] m-auto pb-3">
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
      </footer>
    </article>
    <BaseCallToAction />
  </main>

  <div v-if="error" class="pt-32 md:pt-24 mb-16">
    <not-found :errorMessage="errorMessage">
      This Means that the Document you're looking for does not exist or may have
      been moved.
    </not-found>
  </div>
</template>

<script>
  import BaseCallToAction from "@/components/BaseCallToAction.vue";
  import { defineSliceZoneComponents } from "@prismicio/vue";
  import IntroductionText from "@/components/Slices/IntroductionText.vue";
  import TextParagraphs from "@/components/Slices/TextParagraphs.vue";
  import ImageCard from "@/components/Slices/ImageCard.vue";
  import ImageGallery from "@/components/Slices/ImageGallery.vue";
  import VideoPlayer from "@/components/Slices/VideoPlayer.vue";
  import MobileImageScreenshotImage from "@/components/Slices/MobileImageScreenshotImage.vue";
  import TwitterButton from "vue-share-buttons/src/components/TwitterButton";
  import FacebookButton from "vue-share-buttons/src/components/FacebookButton";
  export default {
    components: {
      BaseCallToAction,
      TwitterButton,
      FacebookButton,
    },
    data() {
      return {
        loading: true,
        post: null,
        error: false,
        errorMessage: null,
        components: defineSliceZoneComponents({
          introduction: IntroductionText,
          text_paragraphs: TextParagraphs,
          image: ImageCard,
          gallery_of_images: ImageGallery,
          video: VideoPlayer,
          mobile_image___screenshot_image: MobileImageScreenshotImage,
        }),
        articleDate: null,
        author: null,
        articleTitle: null,
      };
    },
    computed: {
      location() {
        return document.location.href;
      },
    },
    methods: {
      async getPost() {
        try {
          this.post = await this.$prismic.client.getByUID(
            "blog",
            this.$route.params.uid,
            {
              fetchLinks: ["author.name", "author.avatar", "author.bio"],
            }
          );

          this.author = this.post.data.author.data;

          const date = new Date(this.post.first_publication_date);
          this.articleDate = date.toLocaleString([], {
            day: "numeric",
            month: "short",
            year: "numeric",
          });
          this.articleTitle = this.post.data.article_title;
        } catch (error) {
          this.loading = false;
          this.error = true;
          this.errorMessage = error.message;
        }
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

    beforeRouteEnter(to, from, next) {
      next((vm) => {
        vm.getPost();
      });
    },

    created() {
      this.getPost();
    },

    beforeUpdate() {
      this.loading = false;
    },

    watch: {
      articleTitle(newValue, oldvalue_trash) {
        document.title = newValue[0].text + " - CoinProfit Blog";
        console.log(oldvalue_trash);
      },
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

  .share-button {
    border-radius: 1200px !important;
  }

  social-button-container {
    display: flex;
    justify-content: space-around;
  }
</style>
