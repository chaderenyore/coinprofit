<template>
  <section v-if="loading" class="text-3xl pt-20 font-extrabold">
    <div class="spinner">
      <svg>
        <use href="@/assets/images/icons.svg#icon-loader"></use>
      </svg>
    </div>
  </section>
  <main v-if="post" class="pt-24 article-main">
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
          <h1 class="text-2xl text-[#3374EA] font-bold">
            {{ $prismic.asText(post.data.article_title) }}
          </h1>
          <section class="mt-5">
            <ul class="flex flex-row gap-3 justify-around">
              <li
                v-for="tag in post.tags"
                :key="tag"
                class="article-tag text-sm text-[#3374EA] font-semibold rounded-full px-3 py-2"
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
              <h1 class="font-bold text-base md:text-lg text-[#3374EA]">
                <PrismicRichText :field="author.name" wrapper="h1" />
              </h1>
              <p class="author-bio text-sm md:text-base font-medium">
                <PrismicRichText :field="author.bio" wrapper="p" />
              </p>
            </figcaption>
          </figure>
        </section>
      </header>
      <main class="w-[90%] m-auto">
        <SliceZone :slices="post.data.body" :components="components" />
      </main>
      <footer class="w-[90%] m-auto">
        <section class="article__review rounded-lg p-8">
          <h1 class="text-[#3374EA] mb-3">Share This Post</h1>
          <div>
            <img src="@/assets/images/twitter.svg" alt="Share on twitter" />
          </div>
        </section>
      </footer>
    </article>
    <BaseCallToAction />
  </main>

  <div v-if="error" class="pt-32 md:pt-24 mb-16">
    <NotFound :errorMessage="errorMessage" />
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
import NotFound from "@/components/Help/NotFound.vue";

export default {
  components: {
    BaseCallToAction,
    NotFound,
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
      }),
      articleDate: null,
      author: null,
    };
  },
  methods: {
    async getPost() {
      try {
        this.post = await this.$prismic.client.getByUID(
          "articles",
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
      } catch (error) {
        console.log(error.message);
        this.loading = false;
        this.error = true;
        this.errorMessage = error.message;
      }
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
};
</script>

<style scoped>
@media (min-width: 27.5rem) {
  .article-main {
    padding-top: 8rem;
  }
}

@media (min-width: 48rem) {
  .article-main {
    padding-top: 2rem;
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
  background: var(--article-tag);
}

.author-bio {
  color: var(--author-bio);
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
