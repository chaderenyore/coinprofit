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
        <footer class="w-[90%] m-auto pb-3">
          <section class="article__review rounded-lg p-[1.5rem]">
            <h1 class="text-[#3374EA] text-sm mb-3 w-4/5 m-auto md:w-2/5">
              Share This Post
            </h1>
            <div class="social-button-container w-4/5 m-auto md:w-2/5">
              <ShareNetwork
                network="twitter"
                :url="'coinprofit.app' + this.post.url"
                :title="post.data.article_title[0].text"
                :description="this.post.data.preview_text[0].text"
              >
                <svg
                  height="24px"
                  style="
                    fill-rule: evenodd;
                    clip-rule: evenodd;
                    stroke-linejoin: round;
                    stroke-miterlimit: 2;
                  "
                  version="1.1"
                  viewBox="0 0 512 512"
                  width="24px"
                  xml:space="preserve"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:serif="http://www.serif.com/"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                >
                  <g>
                    <circle
                      cx="256"
                      cy="256"
                      id="Dark_Blue"
                      r="256"
                      style="fill: #1da1f2"
                    />
                    <path
                      d="M209.152,391.04c113.536,0 175.616,-94.08 175.616,-175.616c0,-2.688 0,-5.376 -0.128,-7.936c12.032,-8.704 22.528,-19.584 30.848,-32c-11.008,4.864 -22.912,8.192 -35.456,9.728c12.8,-7.68 22.528,-19.712 27.136,-34.176c-11.904,7.04 -25.088,12.16 -39.168,14.976c-11.264,-12.032 -27.264,-19.456 -45.056,-19.456c-34.048,0 -61.696,27.648 -61.696,61.696c0,4.864 0.512,9.6 1.664,14.08c-51.328,-2.56 -96.768,-27.136 -127.232,-64.512c-5.248,9.088 -8.32,19.712 -8.32,30.976c0,21.376 10.88,40.32 27.52,51.328c-10.112,-0.256 -19.584,-3.072 -27.904,-7.68l0,0.768c0,29.952 21.248,54.784 49.536,60.544c-5.12,1.408 -10.624,2.176 -16.256,2.176c-3.968,0 -7.808,-0.384 -11.648,-1.152c7.808,24.576 30.592,42.368 57.6,42.88c-21.12,16.512 -47.744,26.368 -76.672,26.368c-4.992,0 -9.856,-0.256 -14.72,-0.896c27.008,17.664 59.52,27.904 94.336,27.904"
                      id="Logo__x2014__FIXED"
                      style="fill: #fff; fill-rule: nonzero"
                    />
                  </g>
                </svg>
              </ShareNetwork>

              <ShareNetwork
                network="facebook"
                :url="'coinprofit.app/blog/' + this.post.slugs[0]"
                :title="post.data.article_title[0].text"
                :description="this.post.data.preview_text[0].text"
                :quote="this.post.data.preview_text[0].text"
              >
                <svg
                  height="24px"
                  style="
                    fill-rule: evenodd;
                    clip-rule: evenodd;
                    stroke-linejoin: round;
                    stroke-miterlimit: 2;
                  "
                  version="1.1"
                  viewBox="0 0 512 512"
                  width="24px"
                  xml:space="preserve"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:serif="http://www.serif.com/"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                >
                  <g>
                    <path
                      d="M512,256c0,-141.385 -114.615,-256 -256,-256c-141.385,0 -256,114.615 -256,256c0,127.777 93.616,233.685 216,252.89l0,-178.89l-65,0l0,-74l65,0l0,-56.4c0,-64.16 38.219,-99.6 96.695,-99.6c28.009,0 57.305,5 57.305,5l0,63l-32.281,0c-31.801,0 -41.719,19.733 -41.719,39.978l0,48.022l71,0l-11.35,74l-59.65,0l0,178.89c122.385,-19.205 216,-125.113 216,-252.89Z"
                      style="fill: #1877f2; fill-rule: nonzero"
                    />
                    <path
                      d="M355.65,330l11.35,-74l-71,0l0,-48.022c0,-20.245 9.917,-39.978 41.719,-39.978l32.281,0l0,-63c0,0 -29.297,-5 -57.305,-5c-58.476,0 -96.695,35.44 -96.695,99.6l0,56.4l-65,0l0,74l65,0l0,178.89c13.033,2.045 26.392,3.11 40,3.11c13.608,0 26.966,-1.065 40,-3.11l0,-178.89l59.65,0Z"
                      style="fill: #fff; fill-rule: nonzero"
                    />
                  </g>
                </svg>
              </ShareNetwork>
            </div>
          </section>
        </footer>
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
export default {
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
    };
  },

  async asyncData({ $prismic, params, error }) {
    const post = await $prismic.api.getByUID("articles", params.uid, {
      fetchLinks: ["author.name", "author.avatar", "author.bio"],
    });

    if (post) {
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
      title: this.post.data.article_title[0].text,
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
            "bitcoin,crypto tracking, track crypto assets, coinprofit help, eth, tracking, portfolio tracking",
        },
        {
          property: "og:title",
          content: this.post.data.article_title[0].text,
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
          content: "coinprofit.app" + this.post.url,
        },
        {
          property: "og:image",
          content: this.post.data.cover_image.url,
        },
        
        {
          name: "twitter:title",
          content: this.post.data.article_title[0].text,
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
